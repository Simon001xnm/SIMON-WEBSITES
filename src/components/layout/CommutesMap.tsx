'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const CommutesMapComponent = () => {
  const commutesContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  const commutesGlobalScriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error("Google Maps API key is not set. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.");
      setApiKeyMissing(true);
      return;
    }
    setApiKeyMissing(false);

    // Define the Commutes class and its helper functions
    // This script content will be dynamically added to the page
    const commutesLogic = `
      'use strict';

      const commutesWidgetInternal = {}; // Namespace to avoid polluting global scope too much

      commutesWidgetInternal.commutesEl = {
        map: null,
        initialStatePanel: null,
        destinationPanel: null,
        modal: null,
      };

      commutesWidgetInternal.destinationPanelEl = {
        addButton: null,
        container: null,
        list: null,
        scrollLeftButton: null,
        scrollRightButton: null,
        getActiveDestination: () => commutesWidgetInternal.commutesEl.destinationPanel.querySelector('.destination.active'),
      };

      commutesWidgetInternal.destinationModalEl = {
        title: null,
        form: null,
        destinationInput: null,
        errorMessage: null,
        addButton: null,
        deleteButton: null,
        editButton: null,
        cancelButton: null,
        getTravelModeInput: () => commutesWidgetInternal.commutesEl.modal.querySelector('input[name="travel-mode"]:checked'),
      };

      commutesWidgetInternal.MAX_NUM_DESTINATIONS = 10;
      commutesWidgetInternal.BIAS_BOUND_DISTANCE = 0.5;
      commutesWidgetInternal.HOUR_IN_SECONDS = 3600;
      commutesWidgetInternal.MIN_IN_SECONDS = 60;

      commutesWidgetInternal.STROKE_COLORS = {
        active: { innerStroke: '#4285F4', outerStroke: '#185ABC' },
        inactive: { innerStroke: '#BDC1C6', outerStroke: '#80868B' },
      };

      commutesWidgetInternal.MARKER_ICON_COLORS = {
        active: { fill: '#EA4335', stroke: '#C5221F', label: '#FFF' },
        inactive: { fill: '#F1F3F4', stroke: '#9AA0A6', label: '#3C4043' },
      };

      commutesWidgetInternal.DestinationOperation = { ADD: 'ADD', EDIT: 'EDIT', DELETE: 'DELETE' };
      commutesWidgetInternal.TravelMode = { DRIVING: 'DRIVING', TRANSIT: 'TRANSIT', BICYCLING: 'BICYCLING', WALKING: 'WALKING' };

      function Commutes(configuration) {
        let commutesMap;
        let activeDestinationIndex;
        let origin = configuration.mapOptions.center;
        let destinations = configuration.destination || [];
        let markerIndex = 0;
        let lastActiveEl;

        const commutesEl = commutesWidgetInternal.commutesEl;
        const destinationPanelEl = commutesWidgetInternal.destinationPanelEl;
        const destinationModalEl = commutesWidgetInternal.destinationModalEl;

        // Initialize selectors once the main commutes container is available
        if (commutesContainerRef.current) {
            commutesEl.map = commutesContainerRef.current.querySelector('.map-view');
            commutesEl.initialStatePanel = commutesContainerRef.current.querySelector('.commutes-initial-state');
            commutesEl.destinationPanel = commutesContainerRef.current.querySelector('.commutes-destinations');
            commutesEl.modal = document.querySelector('.commutes-modal-container'); // Modal is outside commutesContainerRef

            if (commutesEl.destinationPanel) {
                destinationPanelEl.addButton = commutesEl.destinationPanel.querySelector('.add-button');
                destinationPanelEl.container = commutesEl.destinationPanel.querySelector('.destinations-container');
                destinationPanelEl.list = commutesEl.destinationPanel.querySelector('.destination-list');
                destinationPanelEl.scrollLeftButton = commutesEl.destinationPanel.querySelector('.left-control');
                destinationPanelEl.scrollRightButton = commutesEl.destinationPanel.querySelector('.right-control');
            }
            if (commutesEl.modal) {
                destinationModalEl.title = commutesEl.modal.querySelector('h2');
                destinationModalEl.form = commutesEl.modal.querySelector('form');
                destinationModalEl.destinationInput = commutesEl.modal.querySelector('input[name="destination-address"]');
                destinationModalEl.errorMessage = commutesEl.modal.querySelector('.error-message');
                destinationModalEl.addButton = commutesEl.modal.querySelector('.add-destination-button');
                destinationModalEl.deleteButton = commutesEl.modal.querySelector('.delete-destination-button');
                destinationModalEl.editButton = commutesEl.modal.querySelector('.edit-destination-button');
                destinationModalEl.cancelButton = commutesEl.modal.querySelector('.cancel-button');
            }
        }


        const markerIconConfig = {
          path: 'M10 27c-.2 0-.2 0-.5-1-.3-.8-.7-2-1.6-3.5-1-1.5-2-2.7-3-3.8-2.2-2.8-3.9-5-3.9-8.8C1 4.9 5 1 10 1s9 4 9 8.9c0 3.9-1.8 6-4 8.8-1 1.2-1.9 2.4-2.8 3.8-1 1.5-1.4 2.7-1.6 3.5-.3 1-.4 1-.6 1Z',
          fillOpacity: 1,
          strokeWeight: 1,
          anchor: new google.maps.Point(10, 27), // Adjusted anchor
          scale: 1.2,
          labelOrigin: new google.maps.Point(10, 10), // Adjusted labelOrigin
        };
        const originMarkerIcon = { ...markerIconConfig, fillColor: commutesWidgetInternal.MARKER_ICON_COLORS.active.fill, strokeColor: commutesWidgetInternal.MARKER_ICON_COLORS.active.stroke };
        const destinationMarkerIcon = { ...markerIconConfig, fillColor: commutesWidgetInternal.MARKER_ICON_COLORS.inactive.fill, strokeColor: commutesWidgetInternal.MARKER_ICON_COLORS.inactive.stroke };
        const bikeLayer = new google.maps.BicyclingLayer();
        const publicTransitLayer = new google.maps.TransitLayer();

        initMapView();
        initDestinations();
        initCommutesPanel();
        initCommutesModal();

        function initMapView() {
          if (!commutesEl.map) { console.error("Map view element not found for Commutes initMapView."); return; }
          const mapOptionConfig = configuration.mapOptions;
          commutesMap = new google.maps.Map(commutesEl.map, mapOptionConfig);
          configuration.defaultTravelModeEnum = parseTravelModeEnum(configuration.defaultTravelMode);
          setTravelModeLayer(configuration.defaultTravelModeEnum);
          createMarker(origin);
        }

        function initDestinations() {
          if (!configuration.initialDestinations || !commutesMap) return;
          let callbackCounter = 0;
          const placesService = new google.maps.places.PlacesService(commutesMap);
          for (const destination of configuration.initialDestinations) {
            destination.travelModeEnum = parseTravelModeEnum(destination.travelMode);
            const label = getNextMarkerLabel();
            const request = { placeId: destination.placeId, fields: ['place_id', 'geometry', 'name'] };
            placesService.getDetails(request, function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK || !place || !place.geometry || !place.geometry.location) {
                console.error('Place details request failed for ' + destination.placeId + ' with status: ' + status);
                callbackCounter++; // Ensure counter progresses
                if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
                return;
              }
              const travelModeEnum = destination.travelModeEnum || configuration.defaultTravelModeEnum;
              const destinationConfig = createDestinationConfig(place, travelModeEnum, label);
              getDirections(destinationConfig).then((response) => {
                if (!response) {
                   callbackCounter++; 
                   if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
                   return;
                }
                destinations.push(destinationConfig);
                getCommutesInfo(response, destinationConfig);
                callbackCounter++;
                if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
              }).catch(e => {
                console.error('Error getting directions for ' + destinationConfig.name + ': ' + e);
                callbackCounter++;
                if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
              });
            });
          }
        }
        
        function handleAllDestinationsProcessed() {
            destinations.sort((a, b) => a.label < b.label ? -1 : 1);
            let bounds = new google.maps.LatLngBounds();
            destinations.forEach((dest, i) => {
                assignMapObjectListeners(dest, i);
                updateCommutesPanel(dest, i, commutesWidgetInternal.DestinationOperation.ADD);
                if (dest.bounds) bounds.union(dest.bounds);
            });
            if (destinations.length > 0) {
                const lastIndex = destinations.length - 1;
                handleRouteClick(destinations[lastIndex], lastIndex);
                if (!bounds.isEmpty()) commutesMap.fitBounds(bounds);
            }
        }


        function initCommutesPanel() {
          if (!commutesContainerRef.current) return;
          const addCommutesButtonEls = commutesContainerRef.current.querySelectorAll('.add-button');
          addCommutesButtonEls.forEach(addButton => {
            addButton.addEventListener('click', () => {
              if (!destinationModalEl.title) return;
              destinationModalEl.title.innerHTML = 'Add destination';
              commutesWidgetInternal.hideElement(destinationModalEl.deleteButton);
              commutesWidgetInternal.hideElement(destinationModalEl.editButton);
              commutesWidgetInternal.showElement(destinationModalEl.addButton);
              commutesWidgetInternal.showModal();
              const travelModeEnum = configuration.defaultTravelModeEnum || commutesWidgetInternal.TravelMode.DRIVING;
              const travelModeId = travelModeEnum.toLowerCase() + '-mode';
              if (document.forms['destination-form'] && document.forms['destination-form'][travelModeId]) {
                document.forms['destination-form'][travelModeId].checked = true;
              }
            });
          });
          if (destinationPanelEl.scrollLeftButton) destinationPanelEl.scrollLeftButton.addEventListener('click', commutesWidgetInternal.handleScrollButtonClick);
          if (destinationPanelEl.scrollRightButton) destinationPanelEl.scrollRightButton.addEventListener('click', commutesWidgetInternal.handleScrollButtonClick);
          if (destinationPanelEl.list) destinationPanelEl.list.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target !== destinationPanelEl.getActiveDestination()) {
              e.target.click(); e.preventDefault();
            }
          });
        }

        function initCommutesModal() {
          if (!commutesEl.modal || !destinationModalEl.destinationInput) return;
          const boundConfig = {
            north: origin.lat + commutesWidgetInternal.BIAS_BOUND_DISTANCE, south: origin.lat - commutesWidgetInternal.BIAS_BOUND_DISTANCE,
            east: origin.lng + commutesWidgetInternal.BIAS_BOUND_DISTANCE, west: origin.lng - commutesWidgetInternal.BIAS_BOUND_DISTANCE,
          };
          const autocompleteOptions = { bounds: boundConfig, fields: ['place_id', 'geometry', 'name'] };
          const autocomplete = new google.maps.places.Autocomplete(destinationModalEl.destinationInput, autocompleteOptions);
          let destinationToAdd;
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) return;
            destinationToAdd = place;
            if (destinationModalEl.getTravelModeInput()) destinationModalEl.getTravelModeInput().focus();
            destinationModalEl.destinationInput.classList.remove('error');
            destinationModalEl.errorMessage.innerHTML = '';
          });

          const destinationFormReset = function() {
            if (!destinationModalEl.destinationInput) return;
            destinationModalEl.destinationInput.classList.remove('error');
            destinationModalEl.errorMessage.innerHTML = '';
            if (destinationModalEl.form) destinationModalEl.form.reset();
            destinationToAdd = null;
          };

          if (destinationModalEl.addButton) destinationModalEl.addButton.addEventListener('click', () => {
            const isValidInput = validateDestinationInput(destinationToAdd);
            if (!isValidInput) return;
            const selectedTravelMode = destinationModalEl.getTravelModeInput().value;
            addDestinationToList(destinationToAdd, selectedTravelMode);
            destinationFormReset();
            commutesWidgetInternal.hideModal();
          });

          if (destinationModalEl.editButton) destinationModalEl.editButton.addEventListener('click', () => {
            const destination = {...destinations[activeDestinationIndex]};
            const selectedTravelMode = destinationModalEl.getTravelModeInput().value;
            const isSameDestination = destination.name === destinationModalEl.destinationInput.value;
            const isSameTravelMode = destination.travelModeEnum === selectedTravelMode;
            if (isSameDestination && isSameTravelMode) { commutesWidgetInternal.hideModal(); return; }
            if (!isSameDestination) {
              const isValidInput = validateDestinationInput(destinationToAdd);
              if (!isValidInput) return;
              destination.name = destinationToAdd.name;
              destination.place_id = destinationToAdd.place_id;
              destination.url = generateMapsUrl(destinationToAdd, selectedTravelMode);
            }
            if (!isSameTravelMode) {
              destination.travelModeEnum = selectedTravelMode;
              destination.url = generateMapsUrl(destination, selectedTravelMode);
            }
            destinationFormReset();
            getDirections(destination).then((response) => {
              if (!response) return;
              removeDirectionsFromMapView(destinations[activeDestinationIndex]);
              destinations[activeDestinationIndex] = destination;
              getCommutesInfo(response, destination);
              assignMapObjectListeners(destination, activeDestinationIndex);
              updateCommutesPanel(destination, activeDestinationIndex, commutesWidgetInternal.DestinationOperation.EDIT);
              handleRouteClick(destination, activeDestinationIndex);
              const newEditButton = destinationPanelEl.list.children.item(activeDestinationIndex)?.querySelector('.edit-button');
              if (newEditButton) newEditButton.focus();
            }).catch((e) => console.error('Editing directions failed due to ' + e));
            commutesWidgetInternal.hideModal();
          });

          if (destinationModalEl.cancelButton) destinationModalEl.cancelButton.addEventListener('click', () => { destinationFormReset(); commutesWidgetInternal.hideModal(); });
          
          if (destinationModalEl.deleteButton) destinationModalEl.deleteButton.addEventListener('click', () => {
            removeDirectionsFromMapView(destinations[activeDestinationIndex]);
            updateCommutesPanel(destinations[activeDestinationIndex], activeDestinationIndex, commutesWidgetInternal.DestinationOperation.DELETE);
            destinationFormReset();
            let elToFocus;
            if (destinations.length) {
              const lastIndex = Math.max(0, activeDestinationIndex -1); // Focus previous or first
              handleRouteClick(destinations[lastIndex], lastIndex);
              elToFocus = destinationPanelEl.getActiveDestination();
            } else {
              elToFocus = commutesEl.initialStatePanel?.querySelector('.add-button');
            }
            activeDestinationIndex = undefined; // Reset active index
            commutesWidgetInternal.hideModal(elToFocus);
          });

          window.onmousedown = function(event) { if (event.target === commutesEl.modal) { destinationFormReset(); commutesWidgetInternal.hideModal(); }};
          
          if(commutesEl.modal) commutesEl.modal.addEventListener('keydown', (e) => {
            switch(e.key) {
              case 'Enter':
                if (e.target === destinationModalEl.cancelButton || e.target === destinationModalEl.deleteButton) return;
                if (destinationModalEl.addButton && destinationModalEl.addButton.style.display !== 'none') destinationModalEl.addButton.click();
                else if (destinationModalEl.editButton && destinationModalEl.editButton.style.display !== 'none') destinationModalEl.editButton.click();
                break;
              case "Esc": case "Escape": commutesWidgetInternal.hideModal(); break;
              default: return;
            }
            e.preventDefault();
          });

          const firstInteractiveElement = destinationModalEl.destinationInput;
          const lastInteractiveElements = [destinationModalEl.addButton, destinationModalEl.editButton];
          if(firstInteractiveElement) firstInteractiveElement.addEventListener('keydown', handleFirstInteractiveElementTab);
          for (const el of lastInteractiveElements) { if(el) el.addEventListener('keydown', handleLastInteractiveElementTab); }

          function handleFirstInteractiveElementTab(event) {
            if (event.key === 'Tab' && event.shiftKey) {
              for (const el of lastInteractiveElements) { if (el && el.style.display !== 'none') { event.preventDefault(); el.focus(); return; }}
            }
          }
          function handleLastInteractiveElementTab(event) {
            if (event.key === 'Tab' && !event.shiftKey) { if(firstInteractiveElement) {event.preventDefault(); firstInteractiveElement.focus();}}
          }
        }

        function validateDestinationInput(destinationToAdd) {
          let errorMessage; let isValidInput = false;
          if (!destinationToAdd) errorMessage = 'No details available for destination input';
          else if (destinations.length >= commutesWidgetInternal.MAX_NUM_DESTINATIONS) errorMessage = 'Cannot add more than ' + commutesWidgetInternal.MAX_NUM_DESTINATIONS + ' destinations';
          else if (destinations && destinations.find(d => d.place_id === destinationToAdd.place_id)) errorMessage = 'Destination is already added';
          else isValidInput = true;
          if (!isValidInput && destinationModalEl.errorMessage) {
            destinationModalEl.errorMessage.innerHTML = errorMessage;
            if(destinationModalEl.destinationInput) destinationModalEl.destinationInput.classList.add('error');
          }
          return isValidInput;
        }

        function removeDirectionsFromMapView(destination) {
          if (destination.polylines) {
            if(destination.polylines.innerStroke) destination.polylines.innerStroke.setMap(null);
            if(destination.polylines.outerStroke) destination.polylines.outerStroke.setMap(null);
          }
          if (destination.marker) destination.marker.setMap(null);
        }

        function buildDestinationCardTemplate(destination, destinationIdx, destinationOperation) {
          let editButtonEl;
          const destinationTemplate = commutesWidgetInternal.generateDestinationTemplate(destination);
          switch (destinationOperation) {
            case commutesWidgetInternal.DestinationOperation.ADD:
              if (!destinationPanelEl.list) return;
              destinationPanelEl.list.insertAdjacentHTML('beforeend', '<div class="destination-container">' + destinationTemplate + '</div>');
              const destinationContainerEl = destinationPanelEl.list.lastElementChild;
              if (destinationContainerEl) {
                destinationContainerEl.addEventListener('click', () => handleRouteClick(destination, destinationIdx));
                editButtonEl = destinationContainerEl.querySelector('.edit-button');
                if (destinationPanelEl.container) destinationPanelEl.container.scrollLeft = destinationPanelEl.container.scrollWidth;
              }
              break;
            case commutesWidgetInternal.DestinationOperation.EDIT:
              const activeDestinationContainerEl = destinationPanelEl.getActiveDestination()?.parentElement;
              if (activeDestinationContainerEl) {
                activeDestinationContainerEl.innerHTML = destinationTemplate;
                activeDestinationContainerEl.addEventListener('click', () => handleRouteClick(destination, destinationIdx));
                editButtonEl = activeDestinationContainerEl.querySelector('.edit-button');
              }
              break;
          }
          if (editButtonEl) editButtonEl.addEventListener('click', () => {
            if (!destinationModalEl.title || !destinationModalEl.destinationInput) return;
            destinationModalEl.title.innerHTML = 'Edit destination';
            destinationModalEl.destinationInput.value = destination.name;
            commutesWidgetInternal.showElement(destinationModalEl.deleteButton);
            commutesWidgetInternal.showElement(destinationModalEl.editButton);
            commutesWidgetInternal.hideElement(destinationModalEl.addButton);
            commutesWidgetInternal.showModal();
            const travelModeId = destination.travelModeEnum.toLowerCase() + '-mode';
            if (document.forms['destination-form'] && document.forms['destination-form'][travelModeId]) {
              document.forms['destination-form'][travelModeId].checked = true;
            }
            destinationModalEl.destinationInput.dispatchEvent(new Event('input'));
          });
        }

        function updateCommutesPanel(destination, destinationIdx, destinationOperation) {
          switch (destinationOperation) {
            case commutesWidgetInternal.DestinationOperation.ADD:
              if(commutesEl.initialStatePanel) commutesWidgetInternal.hideElement(commutesEl.initialStatePanel);
              if(commutesEl.destinationPanel) commutesWidgetInternal.showElement(commutesEl.destinationPanel);
            case commutesWidgetInternal.DestinationOperation.EDIT:
              buildDestinationCardTemplate(destination, destinationIdx, destinationOperation);
              break;
            case commutesWidgetInternal.DestinationOperation.DELETE:
              destinations.splice(destinationIdx, 1);
              if(destinationPanelEl.list) destinationPanelEl.list.innerHTML = '';
              destinations.forEach((d, i) => {
                buildDestinationCardTemplate(d, i, commutesWidgetInternal.DestinationOperation.ADD);
                assignMapObjectListeners(d, i);
              });
          }
          if (!destinations.length) {
            if (commutesEl.initialStatePanel) commutesWidgetInternal.showElement(commutesEl.initialStatePanel);
            if (commutesEl.destinationPanel) commutesWidgetInternal.hideElement(commutesEl.destinationPanel);
            activeDestinationIndex = undefined;
            return;
          }
          if (destinationPanelEl.container) {
            destinationPanelEl.container.addEventListener('scroll', commutesWidgetInternal.handlePanelScroll);
            destinationPanelEl.container.dispatchEvent(new Event('scroll'));
          }
        }

        function addDestinationToList(destinationToAdd, travelModeEnum) {
          const destinationConfig = createDestinationConfig(destinationToAdd, travelModeEnum);
          const newDestinationIndex = destinations.length;
          getDirections(destinationConfig).then((response) => {
            if (!response) return;
            destinations.push(destinationConfig);
            getCommutesInfo(response, destinationConfig);
            assignMapObjectListeners(destinationConfig, newDestinationIndex);
            updateCommutesPanel(destinationConfig, newDestinationIndex, commutesWidgetInternal.DestinationOperation.ADD);
            handleRouteClick(destinationConfig, newDestinationIndex);
            if (destinationPanelEl.addButton) destinationPanelEl.addButton.focus();
          }).catch((e) => console.error('Adding destination failed due to ' + e));
        }

        function getNextMarkerLabel() {
          const markerLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const label = markerLabels[markerIndex];
          markerIndex = (markerIndex + 1) % markerLabels.length;
          return label;
        }

        function createDestinationConfig(destinationToAdd, travelModeEnum, label) {
          return {
            name: destinationToAdd.name,
            place_id: destinationToAdd.place_id,
            label: label || getNextMarkerLabel(),
            travelModeEnum: travelModeEnum,
            url: generateMapsUrl(destinationToAdd, travelModeEnum),
          };
        }

        function getDirections(destination) {
          const request = {
            origin: origin,
            destination: {'placeId': destination.place_id},
            travelMode: google.maps.TravelMode[destination.travelModeEnum],
            unitSystem: configuration.distanceMeasurementType === 'METRIC' ? google.maps.UnitSystem.METRIC : google.maps.UnitSystem.IMPERIAL,
          };
          const directionsService = new google.maps.DirectionsService();
          return directionsService.route(request);
        }

        function getCommutesInfo(directionResponse, destination) {
          if (!directionResponse || !directionResponse.routes || directionResponse.routes.length === 0) return;
          const route = directionResponse.routes[0];
          if (!route.legs || route.legs.length === 0) return;
          
          const path = route.overview_path;
          const bounds = route.bounds;
          const directionLeg = route.legs[0];
          const destinationLocation = directionLeg.end_location;
          const distance = directionLeg.distance.text;
          const duration = convertDurationValueAsString(directionLeg.duration.value);

          const innerStroke = new google.maps.Polyline({ path: path, strokeColor: commutesWidgetInternal.STROKE_COLORS.inactive.innerStroke, strokeOpacity: 1.0, strokeWeight: 3, zIndex: 10 });
          const outerStroke = new google.maps.Polyline({ path: path, strokeColor: commutesWidgetInternal.STROKE_COLORS.inactive.outerStroke, strokeOpacity: 1.0, strokeWeight: 6, zIndex: 1 });
          const marker = createMarker(destinationLocation, destination.label);

          innerStroke.setMap(commutesMap);
          outerStroke.setMap(commutesMap);

          destination.distance = distance;
          destination.duration = duration;
          destination.marker = marker;
          destination.polylines = {innerStroke, outerStroke};
          destination.bounds = bounds;
        }

        function assignMapObjectListeners(destination, destinationIdx) {
          if (!destination.marker || !destination.polylines) return;
          google.maps.event.clearInstanceListeners(destination.marker);
          google.maps.event.addListener(destination.marker, 'click', () => {
            handleRouteClick(destination, destinationIdx);
            const destEl = destinationPanelEl.list?.querySelectorAll('.destination')[destinationIdx];
            if(destEl) destEl.focus();
          });
          google.maps.event.addListener(destination.marker, 'mouseover', () => changeMapObjectStrokeWeight(destination, true));
          google.maps.event.addListener(destination.marker, 'mouseout', () => changeMapObjectStrokeWeight(destination, false));

          for (const strokeLine in destination.polylines) {
            google.maps.event.clearInstanceListeners(destination.polylines[strokeLine]);
            google.maps.event.addListener(destination.polylines[strokeLine], 'click', () => {
              handleRouteClick(destination, destinationIdx);
              const destEl = destinationPanelEl.list?.querySelectorAll('.destination')[destinationIdx];
              if(destEl) destEl.focus();
            });
            google.maps.event.addListener(destination.polylines[strokeLine], 'mouseover', () => changeMapObjectStrokeWeight(destination, true));
            google.maps.event.addListener(destination.polylines[strokeLine], 'mouseout', () => changeMapObjectStrokeWeight(destination, false));
          }
        }

        function generateMapsUrl(destination, travelModeEnum) {
          let googleMapsUrl = 'https://www.google.com/maps/dir/?api=1';
          googleMapsUrl += '&origin=' + origin.lat + ',' + origin.lng;
          googleMapsUrl += '&destination=' + encodeURIComponent(destination.name) + '&destination_place_id=' + destination.place_id;
          googleMapsUrl += '&travelmode=' + travelModeEnum.toLowerCase();
          return googleMapsUrl;
        }

        function changeMapObjectStrokeWeight(destination, mouseOver) {
          if (!destination.marker || !destination.marker.getIcon() || !destination.polylines) return;
          const destinationMarkerCurrentIcon = destination.marker.getIcon();
          // Create a new icon object to modify, as getIcon() returns a frozen object or a string.
          const newMarkerIcon = { ...destinationMarkerCurrentIcon }; 
          
          if (mouseOver) {
            if (destination.polylines.outerStroke) destination.polylines.outerStroke.setOptions({strokeWeight: 8});
            newMarkerIcon.strokeWeight = 2;
          } else {
            if (destination.polylines.outerStroke) destination.polylines.outerStroke.setOptions({strokeWeight: 6});
            newMarkerIcon.strokeWeight = 1;
          }
          destination.marker.setIcon(newMarkerIcon);
        }
        
        function handleRouteClick(destination, destinationIdx) {
          if (activeDestinationIndex !== undefined && destinations[activeDestinationIndex] && destinations[activeDestinationIndex].polylines) {
            destinations[activeDestinationIndex].polylines.innerStroke.setOptions({strokeColor: commutesWidgetInternal.STROKE_COLORS.inactive.innerStroke, zIndex: 2});
            destinations[activeDestinationIndex].polylines.outerStroke.setOptions({strokeColor: commutesWidgetInternal.STROKE_COLORS.inactive.outerStroke, zIndex: 1});
            if (destinations[activeDestinationIndex].marker) {
                 destinations[activeDestinationIndex].marker.setIcon({...destinationMarkerIcon, label: { ...destinationMarkerIcon.label, text: destinations[activeDestinationIndex].label, color: commutesWidgetInternal.MARKER_ICON_COLORS.inactive.label }});
            }
            const activeDestinationEl = destinationPanelEl.getActiveDestination();
            if (activeDestinationEl) activeDestinationEl.classList.remove('active');
          }

          activeDestinationIndex = destinationIdx;
          setTravelModeLayer(destination.travelModeEnum);
          
          const newDestinationEl = destinationPanelEl.list?.querySelectorAll('.destination')[destinationIdx];
          if (newDestinationEl) {
            newDestinationEl.classList.add('active');
            newDestinationEl.scrollIntoView({behavior: 'smooth', block: 'nearest'}); // Changed to nearest
          }
          
          if (destination.polylines) {
            destination.polylines.innerStroke.setOptions({strokeColor: commutesWidgetInternal.STROKE_COLORS.active.innerStroke, zIndex: 101});
            destination.polylines.outerStroke.setOptions({strokeColor: commutesWidgetInternal.STROKE_COLORS.active.outerStroke, zIndex: 99});
          }
          if (destination.marker) {
             destination.marker.setIcon({...originMarkerIcon, label: { ...originMarkerIcon.label, text: destination.label, color: commutesWidgetInternal.MARKER_ICON_COLORS.active.label }});
          }
          if (commutesMap && destination.bounds) commutesMap.fitBounds(destination.bounds);
        }

        function createMarker(location, label) {
          const isOrigin = label === undefined;
          const baseIcon = isOrigin ? originMarkerIcon : destinationMarkerIcon;
          const labelColor = isOrigin ? commutesWidgetInternal.MARKER_ICON_COLORS.active.label : commutesWidgetInternal.MARKER_ICON_COLORS.inactive.label;
          const labelText = isOrigin ? '●' : label;

          const markerOptions = {
            position: location,
            map: commutesMap,
            label: { text: labelText, fontFamily: 'Arial, sans-serif', color: labelColor, fontSize: '16px' },
            icon: {...baseIcon} // Create a copy to avoid modifying the template
          };
          if (isOrigin) {
            markerOptions.label.fontSize = '20px'; // Keep existing class modification for origin
          }
          return new google.maps.Marker(markerOptions);
        }
        
        function parseTravelModeEnum(travelModeString) {
          switch (travelModeString) {
            case 'DRIVING': return commutesWidgetInternal.TravelMode.DRIVING;
            case 'BICYCLING': return commutesWidgetInternal.TravelMode.BICYCLING;
            case 'TRANSIT': return commutesWidgetInternal.TravelMode.TRANSIT; // Corrected from PUBLIC_TRANSIT
            case 'WALKING': return commutesWidgetInternal.TravelMode.WALKING;
            default: return null;
          }
        }

        function setTravelModeLayer(travelModeEnum) {
          if (!commutesMap) return;
          switch (travelModeEnum) {
            case commutesWidgetInternal.TravelMode.BICYCLING: publicTransitLayer.setMap(null); bikeLayer.setMap(commutesMap); break;
            case commutesWidgetInternal.TravelMode.TRANSIT: bikeLayer.setMap(null); publicTransitLayer.setMap(commutesMap); break;
            default: publicTransitLayer.setMap(null); bikeLayer.setMap(null);
          }
        }

        function convertDurationValueAsString(durationValue) {
          if (!durationValue) return '';
          if (durationValue < commutesWidgetInternal.MIN_IN_SECONDS) return '<1 min';
          if (durationValue > commutesWidgetInternal.HOUR_IN_SECONDS * 10) return '10+ hours';
          const hours = Math.floor(durationValue / commutesWidgetInternal.HOUR_IN_SECONDS);
          const minutes = Math.floor(durationValue % commutesWidgetInternal.HOUR_IN_SECONDS / 60);
          const hoursString = hours > 0 ? hours + ' h' : '';
          const minutesString = minutes > 0 ? minutes + ' min' : '';
          const spacer = hoursString && minutesString ? ' ' : '';
          return hoursString + spacer + minutesString;
        }
      }
      commutesWidgetInternal.Commutes = Commutes; // Expose the main class

      commutesWidgetInternal.hideElement = function(el, focusEl) {
        if(el) el.style.display = 'none';
        if (focusEl) focusEl.focus();
      };
      commutesWidgetInternal.showElement = function(el, focusEl) {
        if(el) el.style.display = 'flex'; // Assuming flex is the default for shown elements
        if (focusEl) focusEl.focus();
      };
      commutesWidgetInternal.showModal = function() {
        if(commutesWidgetInternal.commutesEl.modal) {
            commutesWidgetInternal.lastActiveEl = document.activeElement;
            commutesWidgetInternal.showElement(commutesWidgetInternal.commutesEl.modal, commutesWidgetInternal.destinationModalEl.destinationInput);
        }
      };
      commutesWidgetInternal.hideModal = function(focusEl) {
         if(commutesWidgetInternal.commutesEl.modal) {
            commutesWidgetInternal.hideElement(commutesWidgetInternal.commutesEl.modal, focusEl || commutesWidgetInternal.lastActiveEl);
         }
      };
      commutesWidgetInternal.handleScrollButtonClick = function(e) {
        if (!commutesWidgetInternal.destinationPanelEl.list || !commutesWidgetInternal.destinationPanelEl.list.firstElementChild) return;
        const multiplier = 1.25;
        const direction = e.target.dataset.direction;
        const cardWidth = commutesWidgetInternal.destinationPanelEl.list.firstElementChild.offsetWidth;
        if(commutesWidgetInternal.destinationPanelEl.container) commutesWidgetInternal.destinationPanelEl.container.scrollBy({left: (direction * cardWidth * multiplier), behavior: 'smooth'});
      };
      commutesWidgetInternal.handlePanelScroll = function() {
        if (!commutesWidgetInternal.destinationPanelEl.container) return;
        const position = commutesWidgetInternal.destinationPanelEl.container.scrollLeft;
        const scrollWidth = commutesWidgetInternal.destinationPanelEl.container.scrollWidth;
        const width = commutesWidgetInternal.destinationPanelEl.container.offsetWidth;
        if (scrollWidth > width) {
          if (position === 0) commutesWidgetInternal.destinationPanelEl.scrollLeftButton?.classList.remove('visible');
          else commutesWidgetInternal.destinationPanelEl.scrollLeftButton?.classList.add('visible');
          if (Math.ceil(position + width) >= scrollWidth) commutesWidgetInternal.destinationPanelEl.scrollRightButton?.classList.remove('visible');
          else commutesWidgetInternal.destinationPanelEl.scrollRightButton?.classList.add('visible');
        } else {
            commutesWidgetInternal.destinationPanelEl.scrollLeftButton?.classList.remove('visible');
            commutesWidgetInternal.destinationPanelEl.scrollRightButton?.classList.remove('visible');
        }
      };
      commutesWidgetInternal.generateDestinationTemplate = function(destination) {
        const travelModeIconTemplate = '<use href="#commutes-' + destination.travelModeEnum.toLowerCase() + '-icon"/>';
        return \`
          <div class="destination" tabindex="0" role="button">
            <div class="destination-content">
              <div class="metadata">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\${travelModeIconTemplate}</svg>
                \${destination.distance}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use href="#commutes-arrow-icon"/></svg>
                <span class="location-marker">\${destination.label}</span>
              </div>
              <div class="address">To <abbr title="\${destination.name}">\${destination.name}</abbr></div>
              <div class="destination-eta">\${destination.duration}</div>
            </div>
          </div>
          <div class="destination-controls">
            <a class="directions-button" href=\${destination.url} target="_blank" aria-label="Link to directions in Google Maps">
              <svg aria-label="Directions icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use href="#commutes-directions-icon"/></svg>
            </a>
            <button class="edit-button" aria-label="Edit Destination">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use href="#commutes-edit-icon"/></svg>Edit
            </button>
          </div>\`;
      };
    `;

    if (commutesContainerRef.current && !commutesGlobalScriptRef.current) {
        const scriptTag = document.createElement('script');
        scriptTag.id = "commutes-logic-script";
        scriptTag.innerHTML = commutesLogic;
        document.body.appendChild(scriptTag);
        commutesGlobalScriptRef.current = scriptTag;
    }
    
    (window as any).initMap = () => {
      if (commutesContainerRef.current && (window as any).google && (window as any).commutesWidgetInternal && (window as any).commutesWidgetInternal.Commutes && !isInitialized) {
        const CONFIGURATION = {
          "defaultTravelMode": "DRIVING",
          "distanceMeasurementType": "METRIC",
          "mapOptions": {"center":{"lat":-1.2822329,"lng":36.8211079},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":17,"zoomControl":true,"maxZoom":20,"mapId":""},
          "mapsApiKey": process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY // Ensure this is used if Commutes class needs it
        };
        try {
          new (window as any).commutesWidgetInternal.Commutes(CONFIGURATION);
          setIsInitialized(true);
        } catch (error) {
          console.error("Error initializing Commutes map:", error);
        }
      }
    };

    // If script is loaded and component is mounted, and not yet initialized, try to init.
    // This handles cases where script might load before initMap is assigned, or vice-versa.
    if (scriptLoaded && commutesContainerRef.current && (window as any).google && (window as any).commutesWidgetInternal?.Commutes && !isInitialized) {
      (window as any).initMap();
    }

    return () => {
      // Cleanup
      if (commutesGlobalScriptRef.current) {
        document.body.removeChild(commutesGlobalScriptRef.current);
        commutesGlobalScriptRef.current = null;
      }
      delete (window as any).initMap;
      delete (window as any).commutesWidgetInternal;
      // More specific cleanup of map instance and listeners might be needed if Commutes class doesn't handle it.
      if (commutesContainerRef.current) {
        const mapView = commutesContainerRef.current.querySelector('.map-view');
        if (mapView) mapView.innerHTML = ''; // Clear map container
      }
      setIsInitialized(false); 
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded]); // Dependency: re-run if scriptLoaded changes, or when component mounts/unmounts. APIKey check runs once.

  if (apiKeyMissing) {
    return <div className="p-4 text-red-500 bg-red-100 border border-red-300 rounded-md text-center">Google Maps API key (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) is missing or not configured in your .env.local file. The map cannot be loaded.</div>;
  }

  // The HTML structure for the map.
  // Note: The ref is on a wrapper, and the actual map HTML is injected.
  // The script needs to find elements within this rendered structure.
  const mapWidgetHTML = `
    <style>
      /* User's CSS */
      .commutes-map-wrapper html,
      .commutes-map-wrapper body { /* Scope body styles if possible, or ensure they don't conflict */
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .commutes-map-wrapper .commutes {
        align-content: stretch;
        color: #202124;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-family: Arial, sans-serif;
        height: 450px; /* Fixed height for the map section */
        min-height: 256px;
        min-width: 360px;
        overflow: hidden; /* Changed from auto to hidden for the main container */
        width: 100%;
        border: 1px solid #e0e0e0; /* Add a border for visual separation */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Subtle shadow */
        margin-top: 20px; /* Space above the map */
        margin-bottom: 20px; /* Space below the map */

      }

      .commutes-map-wrapper .commutes-info {
        flex: 0 0 110px;
        max-width: 100%;
        overflow: hidden;
        background-color: #f8f9fa; /* Light background for info section */
        border-top: 1px solid #e0e0e0;
      }

      .commutes-map-wrapper .commutes-initial-state {
        border-radius: 8px;
        border: 1px solid #dadce0;
        display: flex;
        height: 98px;
        margin: 8px; /* Margin around initial state */
        padding: 0 16px;
        background-color: #fff;
      }

      .commutes-map-wrapper .commutes-initial-state svg {
        align-self: center;
      }

      .commutes-map-wrapper .commutes-initial-state .description {
        align-self: center;
        flex-grow: 1;
        padding: 0 16px;
      }

      .commutes-map-wrapper .commutes-initial-state .description .heading {
        font: 22px/28px Arial, sans-serif;
        margin: 0;
        color: #333;
      }

      .commutes-map-wrapper .commutes-initial-state .description p {
        color: #5f6368;
        font: 13px/20px Arial, sans-serif;
        margin: 0;
      }

      .commutes-map-wrapper .commutes-initial-state .add-button {
        align-self: center;
        background-color: #1a73e8;
        border-color: #1a73e8;
        border-radius: 4px;
        border-style: solid;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        fill: #fff;
        padding: 8px 16px 8px 8px;
        white-space: nowrap;
      }
      .commutes-map-wrapper .commutes-initial-state .add-button:hover {
        background-color: #1558b3;
      }


      .commutes-map-wrapper .commutes-initial-state .add-button .label {
        font: normal 600 15px/24px Arial, sans-serif;
        padding-left: 8px;
      }

      @media (max-width: 535px) {
        .commutes-map-wrapper .commutes-initial-state svg { display: none; }
        .commutes-map-wrapper .commutes-initial-state .description { padding-left: 0; }
        .commutes-map-wrapper .commutes-initial-state .description .heading { font-weight: bold; font-size: 15px; line-height: 24px; }
      }

      .commutes-map-wrapper .commutes-destinations {
        display: none; /* Initially hidden, JS will show it */
        position: relative;
        width: 100%;
      }

      .commutes-map-wrapper .commutes-destinations:hover .visible { display: block; }

      .commutes-map-wrapper .commutes-destinations .destinations-container {
        display: flex;
        overflow-x: auto;
        padding: 8px 8px 4px 8px;
        white-space: nowrap;
        width: 100%;
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: #dadce0 #f1f3f4; /* For Firefox */
      }

      .commutes-map-wrapper .commutes-destinations .destinations-container::-webkit-scrollbar { height: 8px; background-color: #f1f3f4; }
      .commutes-map-wrapper .commutes-destinations .destinations-container::-webkit-scrollbar-thumb { background-color: #dadce0; border-radius: 4px; }


      .commutes-map-wrapper .commutes-destinations .destination-list { display: flex; flex-grow: 1; }

      .commutes-map-wrapper .commutes-destinations .right-control,
      .commutes-map-wrapper .commutes-destinations .left-control {
        background-color: #fff; border-radius: 40px; border-style: none; bottom: 35px;
        box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%), 0 6px 10px 4px rgb(60 64 67 / 15%);
        cursor: pointer; fill: #616161; height: 40px; padding: 8px; position: absolute; width: 40px; z-index: 100;
        display: none; /* Controlled by JS via 'visible' class */
      }
      .commutes-map-wrapper .commutes-destinations .right-control.visible,
      .commutes-map-wrapper .commutes-destinations .left-control.visible { display: block; }


      .commutes-map-wrapper .commutes-destinations .right-control:hover,
      .commutes-map-wrapper .commutes-destinations .left-control:hover { background-color: #f1f3f4; }

      .commutes-map-wrapper .commutes-destinations .left-control { left: 16px; }
      .commutes-map-wrapper .commutes-destinations .right-control { right: 16px; }

      .commutes-map-wrapper .commutes-destinations .add-button {
        align-items: center; background-color: #e8f0fe; border-radius: 8px; border-color: #e8f0fe;
        border-style: solid; color: #1967d2; cursor: pointer; display: flex; fill: #1967d2;
        flex-direction: column; flex-grow: 1; font-weight: bold; gap: 4px; justify-content: center;
        min-width: 156px; padding: 20px 16px; margin-left: 8px; /* Added margin for spacing */
      }
      .commutes-map-wrapper .commutes-destinations .add-button:hover { background-color: #d2e3fc; border-color: #d2e3fc; color: #185abc; fill: #185abc; }

      .commutes-map-wrapper .commutes-destinations .destination-container { cursor: pointer; display: flex; flex: 1 1 0; position: relative; }

      .commutes-map-wrapper .commutes-destinations .destination {
        border-radius: 4px; box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        color: #5f6368; fill: #5f6368; height: 72px; justify-content: space-between; margin-right: 8px;
        min-width: 256px; overflow: hidden; padding: 12px; position: relative; width: 100%; background-color: #fff;
      }

      .commutes-map-wrapper .commutes-destinations .active:after {
        background-color: #4285f4; content: ''; display: block; height: 4px; left: 0; position: absolute; top: 0; width: 100%;
      }
      .commutes-map-wrapper .commutes-destinations .active + .destination-controls .directions-button { fill: #4285f4; }
      .commutes-map-wrapper .commutes-destinations .active + .destination-controls .edit-button { opacity: 1; }
      .commutes-map-wrapper .commutes-destinations .active .metadata .location-marker { background-color: #fce8e6; color: #d93025; }

      .commutes-map-wrapper .commutes-destinations .destination-container:hover,
      .commutes-map-wrapper .commutes-destinations .destination-container:focus-within { background-color: #f8f9fa; }
      .commutes-map-wrapper .commutes-destinations .destination-container:hover .edit-button,
      .commutes-map-wrapper .commutes-destinations .destination-container:focus-within .edit-button { opacity: 1; }

      .commutes-map-wrapper .commutes-destinations .destination .destination-content { font-size: 12px; line-height: 20px; overflow: hidden; }
      .commutes-map-wrapper .commutes-destinations .destination .metadata { align-items: center; display: flex; margin-bottom: 4px; gap: 4px; }
      .commutes-map-wrapper .commutes-destinations .destination-container svg { height: 18px; width: 18px; }
      .commutes-map-wrapper .commutes-destinations .destination .location-marker {
        background-color: #f1f3f4; border-radius: 8px; color: #616161; display: inline-block;
        font-size: 14px; font-weight: bold; line-height: 16px; text-align: center; width: 16px;
      }
      .commutes-map-wrapper .commutes-destinations .destination .address { margin-bottom: 4px; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .commutes-map-wrapper .commutes-destinations .destination .address abbr { text-decoration: none; }
      .commutes-map-wrapper .commutes-destinations .destination .destination-eta { color: #202124; font-weight: bold; font-size: 22px; line-height: 28px; }

      .commutes-map-wrapper .commutes-destinations .destination-container .destination-controls {
        align-items: flex-end; display: flex; flex-direction: column; min-width: 70px; position: absolute;
        right: 12px; /* Adjusted for padding */ text-align: right; top: 12px; white-space: nowrap;
      }
      .commutes-map-wrapper .commutes-destinations .destination-container .directions-button {
        align-items: center; background-color: #fff; border-radius: 32px; border: 1px solid #dadce0;
        cursor: pointer; display: flex; fill: #5f6368; height: 32px; justify-content: center; margin: 0; width: 34px;
      }
      .commutes-map-wrapper .commutes-destinations .destination-container .directions-button:hover { background-color: #e8f0fe; fill: #4285f4; }
      .commutes-map-wrapper .commutes-destinations .destination-container .edit-button {
        background-color: #fff; border-radius: 20px; border: 1px solid #dadce0; opacity: 0;
        font-size: 14px; font-weight: bold; line-height: 22px; margin: 8px 0 0 0; padding: 3px 12px 3px 5px;
        fill: #616161; color: #616161; cursor: pointer;
      }
      .commutes-map-wrapper .commutes-destinations .destination-container .edit-button svg { display: inline-block; font-size: 20px; line-height: 20px; width: 20px; vertical-align: middle; }
      .commutes-map-wrapper .commutes-destinations .destination-container .edit-button:hover { background-color: #f1f3f4; }

      .commutes-map-wrapper .commutes-map { flex: 1; overflow: hidden; position: relative; width: 100%; border-bottom: 1px solid #e0e0e0;}
      .commutes-map-wrapper .commutes-map .map-view { background-color: rgb(229, 227, 223); height: 100%; left: 0; position: absolute; top: 0; width: 100%; }

      /* Modal styles need to be global or carefully scoped if .commutes-map-wrapper is not on body */
      .commutes-modal-container {
        align-items: center; background-color: rgba(0, 0, 0, 0.4); display: none; height: 100%;
        justify-content: center; left: 0; position: fixed; top: 0; width: 100%; z-index: 1000;
      }
      .commutes-modal {
        background: #fff; border-radius: 8px; /* Enhanced radius */
        box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1); /* Softer shadow */
        max-height: 90vh; /* Max height */
        overflow-y: auto; /* Scroll if content overflows */
        width: 90%; max-width: 400px; /* Responsive width */
      }
      .commutes-modal .content { padding: 20px; display: flex; flex-direction: column; gap: 16px; }
      .commutes-modal .heading { font: 22px/28px Arial, sans-serif; margin: 0 0 8px 0; color: #333; }
      .commutes-modal input[type="text"] { /* Specific to text input */
        font: 15px/22px Arial, sans-serif; padding: 12px; box-sizing: border-box; width: 100%;
        border: 1px solid #ccc; border-radius: 4px;
      }
      .commutes-modal input.error { border-color: #c03; background-color: #fce4e4; }
      .commutes-modal .error-message { color: #c03; display: inline-block; font: 12px/14px Arial, sans-serif; margin: 4px 0 8px; }
      .commutes-modal .travel-modes { display: flex; flex-direction: row; height: 40px; margin-bottom: 16px; padding: 0; width: 100%; }
      .commutes-modal .travel-modes [type=radio] { height: 0; opacity: 0; position: absolute; width: 0; }
      .commutes-modal .travel-modes label {
        align-items: center; border: solid #dadce0; border-width: 1px 0.031em; cursor: pointer;
        display: inline-flex; fill: #5f6368; flex: 1; justify-content: center; padding: 6px; position: relative;
        transition: background 0.3s, fill 0.3s;
      }
      .commutes-modal .travel-modes label:hover { background-color: #f1f3f4; }
      .commutes-modal .travel-modes svg { height: 24px; width: 24px; }
      .commutes-modal .travel-modes .left-label { border-left-width: 1px; border-radius: 4px 0 0 4px; }
      .commutes-modal .travel-modes .right-label { border-radius: 0 4px 4px 0; border-right-width: 1px; }
      .commutes-modal .travel-modes input[type=radio]:checked+label { background: #e8f0fe; fill: #1967d2; border-color: #1a73e8; }
      .commutes-modal .travel-modes input[type=radio]:focus-visible+label { outline: 2px solid Highlight; outline: 2px solid -webkit-focus-ring-color; outline-offset: -2px; }
      .commutes-modal .modal-action-bar { display: flex; justify-content: flex-end; gap: 8px; padding-top: 8px; }
      .commutes-modal .modal-action-bar button {
        background: transparent; border: none; cursor: pointer; font-size: 14px; font-weight: bold;
        line-height: 32px; padding: 0 12px; border-radius: 4px; transition: background-color 0.2s;
      }
      .commutes-modal .modal-action-bar .delete-destination-button { color: #c5221f; margin-right: auto; /* Pushes to the left */ }
      .commutes-modal .modal-action-bar .delete-destination-button:hover { background-color: #fce8e6; }
      .commutes-modal .modal-action-bar .cancel-button { color: #5f6368; }
      .commutes-modal .modal-action-bar .cancel-button:hover { background-color: #f1f3f4; }
      .commutes-modal .modal-action-bar .add-destination-button,
      .commutes-modal .modal-action-bar .edit-destination-button { color: #fff; background-color: #1a73e8; }
      .commutes-modal .modal-action-bar .add-destination-button:hover,
      .commutes-modal .modal-action-bar .edit-destination-button:hover { background-color: #1558b3; }
      .commutes-modal .hide { display: none !important; } /* Ensure .hide takes precedence */
    </style>

    <svg class="hide" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="commutes-initial-icon" viewBox="0 0 53 53">
          <path d="M41 20H18.6c-9.5 0-10.8 13.5 0 13.5h14.5C41 33.5 41 45 33 45H17.7" stroke="#D2E3FC" stroke-width="5"></path>
          <path d="M41 22c.2 0 .4 0 .6-.2l.4-.5c.3-1 .7-1.7 1.1-2.5l2-3c.8-1 1.5-2 2-3 .6-1 .9-2.3.9-3.8 0-2-.7-3.6-2-5-1.4-1.3-3-2-5-2s-3.6.7-5 2c-1.3 1.4-2 3-2 5 0 1.4.3 2.6.8 3.6s1.2 2 2 3.2c.9 1 1.6 2 2 2.8.5.9 1 1.7 1.2 2.7l.4.5.6.2Zm0-10.5c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8s.2-1.3.7-1.8c.5-.5 1.1-.7 1.8-.7s1.3.2 1.8.7c.5.5.7 1.1.7 1.8s-.2 1.3-.7 1.8c-.5.5-1.1.7-1.8.7Z" fill="#185ABC"></path>
          <path d="m12 32-8 6v12h5v-7h6v7h5V38l-8-6Z" fill="#4285F4"></path>
        </symbol>
        <symbol id="commutes-add-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></symbol>
        <symbol id="commutes-driving-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></symbol>
        <symbol id="commutes-transit-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm5.66 3H6.43c.61-.52 2.06-1 5.57-1 3.71 0 5.12.46 5.66 1zM11 7v3H6V7h5zm2 0h5v3h-5V7zm3.5 10h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5c0 .83-.67 1.5-1.5 1.5z"/><circle cx="8.5" cy="14.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/></symbol>
        <symbol id="commutes-bicycling-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/></symbol>
        <symbol id="commutes-walking-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7"/></symbol>
        <symbol id="commutes-chevron-left-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></symbol>
        <symbol id="commutes-chevron-right-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path xmlns="http://www.w3.org/2000/svg" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></symbol>
        <symbol id="commutes-arrow-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></symbol>
        <symbol id="commutes-directions-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82zm-10.42 10.4l-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z"/></symbol>
        <symbol id="commutes-edit-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></symbol>
      </defs>
    </svg>

    <div class="commutes-map-wrapper">
      <main class="commutes">
        <div class="commutes-map" aria-label="Map">
          <div class="map-view"></div>
        </div>
        <div class="commutes-info">
          <div class="commutes-initial-state">
            <svg aria-label="Directions Icon" width="53" height="53" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-initial-icon"/></svg>
            <div class="description">
              <h1 class="heading">Estimate commute time</h1>
              <p>See travel time and directions for places nearby</p>
            </div>
            <button class="add-button" autofocus>
              <svg aria-label="Add Icon" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-add-icon"/></svg>
              <span class="label">Add destination</span>
            </button>
          </div>
          <div class="commutes-destinations">
            <div class="destinations-container">
              <div class="destination-list"></div>
              <button class="add-button">
                <svg aria-label="Add Icon" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-add-icon"/></svg>
                <div class="label">Add destination</div>
              </button>
            </div>
            <button class="left-control hide" data-direction="-1" aria-label="Scroll left"><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" data-direction="-1"><use href="#commutes-chevron-left-icon" data-direction="-1"/></svg></button>
            <button class="right-control hide" data-direction="1" aria-label="Scroll right"><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" data-direction="1"><use href="#commutes-chevron-right-icon" data-direction="1"/></svg></button>
          </div>
        </div>
      </main>
    </div>

    <div class="commutes-modal-container">
      <div class="commutes-modal" role="dialog" aria-modal="true" aria-labelledby="add-edit-heading">
        <div class="content">
          <h2 id="add-edit-heading" class="heading">Add destination</h2>
          <form id="destination-form">
            <input type="text" id="destination-address-input" name="destination-address" placeholder="Enter a place or address" autocomplete="off" required />
            <div class="error-message" role="alert"></div>
            <div class="travel-modes">
              <input type="radio" name="travel-mode" id="driving-mode" value="DRIVING" aria-label="Driving travel mode" /><label for="driving-mode" class="left-label" title="Driving travel mode"><svg aria-label="Driving icon" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-driving-icon"/></svg></label>
              <input type="radio" name="travel-mode" id="transit-mode" value="TRANSIT" aria-label="Public transit travel mode" /><label for="transit-mode" title="Public transit travel mode"><svg aria-label="Public transit icon" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-transit-icon"/></svg></label>
              <input type="radio" name="travel-mode" id="bicycling-mode" value="BICYCLING" aria-label="Bicycling travel mode" /><label for="bicycling-mode" title="Bicycling travel mode"><svg aria-label="Bicycling icon" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-bicycling-icon"/></svg></label>
              <input type="radio" name="travel-mode" id="walking-mode" value="WALKING" aria-label="Walking travel mode" /><label for="walking-mode" class="right-label" title="Walking travel mode"><svg aria-label="Walking icon" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-walking-icon"/></svg></label>
            </div>
          </form>
          <div class="modal-action-bar">
            <button class="delete-destination-button hide" type="reset">Delete</button>
            <button class="cancel-button" type="reset">Cancel</button>
            <button class="add-destination-button" type="button">Add</button>
            <button class="edit-destination-button hide" type="button">Done</button>
          </div>
        </div>
      </div>
    </div>
  `;


  return (
    <div ref={commutesContainerRef}>
      <div dangerouslySetInnerHTML={{ __html: mapWidgetHTML }} />
      {!apiKeyMissing && (
        <Script
          id="google-maps-commutes-api"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_commutes_v3_c`}
          strategy="lazyOnload"
          onLoad={() => {
            setScriptLoaded(true);
          }}
          onError={(e) => {
            console.error('Failed to load Google Maps script:', e);
          }}
        />
      )}
    </div>
  );
};

export default CommutesMapComponent;
