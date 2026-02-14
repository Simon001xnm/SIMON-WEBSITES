'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

/**
 * CommutesMapComponent
 * 
 * SECURITY ADVISORY:
 * Ensure your Google Maps API Key is restricted in the Google Cloud Console:
 * 1. API Restriction: Limit to "Maps JavaScript API" only.
 * 2. Application Restriction: Limit to your specific domain (e.g., simon-styles.web.app).
 */
const CommutesMapComponent = () => {
  const commutesContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  const commutesGlobalScriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Advisory: Pulling from environment variables to avoid code-committed secrets
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_RESTRICTED_API_KEY_HERE') {
      console.warn("Google Maps API key is missing or using placeholder. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.");
      setApiKeyMissing(true);
      return;
    }
    setApiKeyMissing(false);

    const commutesLogic = `
      'use strict';
      const commutesWidgetInternal = {};
      commutesWidgetInternal.commutesEl = { map: null, initialStatePanel: null, destinationPanel: null, modal: null };
      commutesWidgetInternal.destinationPanelEl = { addButton: null, container: null, list: null, scrollLeftButton: null, scrollRightButton: null, getActiveDestination: () => commutesWidgetInternal.commutesEl.destinationPanel.querySelector('.destination.active') };
      commutesWidgetInternal.destinationModalEl = { title: null, form: null, destinationInput: null, errorMessage: null, addButton: null, deleteButton: null, editButton: null, cancelButton: null, getTravelModeInput: () => commutesWidgetInternal.commutesEl.modal.querySelector('input[name="travel-mode"]:checked') };
      commutesWidgetInternal.MAX_NUM_DESTINATIONS = 10;
      commutesWidgetInternal.BIAS_BOUND_DISTANCE = 0.5;
      commutesWidgetInternal.HOUR_IN_SECONDS = 3600;
      commutesWidgetInternal.MIN_IN_SECONDS = 60;
      commutesWidgetInternal.STROKE_COLORS = { active: { innerStroke: '#4285F4', outerStroke: '#185ABC' }, inactive: { innerStroke: '#BDC1C6', outerStroke: '#80868B' } };
      commutesWidgetInternal.MARKER_ICON_COLORS = { active: { fill: '#EA4335', stroke: '#C5221F', label: '#FFF' }, inactive: { fill: '#F1F3F4', stroke: '#9AA0A6', label: '#3C4043' } };
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

        if (document.getElementById('commutes-container')) {
            const container = document.getElementById('commutes-container');
            commutesEl.map = container.querySelector('.map-view');
            commutesEl.initialStatePanel = container.querySelector('.commutes-initial-state');
            commutesEl.destinationPanel = container.querySelector('.commutes-destinations');
            commutesEl.modal = document.querySelector('.commutes-modal-container');
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

        const markerIconConfig = { path: 'M10 27c-.2 0-.2 0-.5-1-.3-.8-.7-2-1.6-3.5-1-1.5-2-2.7-3-3.8-2.2-2.8-3.9-5-3.9-8.8C1 4.9 5 1 10 1s9 4 9 8.9c0 3.9-1.8 6-4 8.8-1 1.2-1.9 2.4-2.8 3.8-1 1.5-1.4 2.7-1.6 3.5-.3 1-.4 1-.6 1Z', fillOpacity: 1, strokeWeight: 1, anchor: new google.maps.Point(10, 27), scale: 1.2, labelOrigin: new google.maps.Point(10, 10) };
        const originMarkerIcon = { ...markerIconConfig, fillColor: commutesWidgetInternal.MARKER_ICON_COLORS.active.fill, strokeColor: commutesWidgetInternal.MARKER_ICON_COLORS.active.stroke };
        const destinationMarkerIcon = { ...markerIconConfig, fillColor: commutesWidgetInternal.MARKER_ICON_COLORS.inactive.fill, strokeColor: commutesWidgetInternal.MARKER_ICON_COLORS.inactive.stroke };
        const bikeLayer = new google.maps.BicyclingLayer();
        const publicTransitLayer = new google.maps.TransitLayer();

        initMapView();
        initDestinations();
        initCommutesPanel();
        initCommutesModal();

        function initMapView() {
          if (!commutesEl.map) return;
          commutesMap = new google.maps.Map(commutesEl.map, configuration.mapOptions);
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
              if (status !== google.maps.places.PlacesServiceStatus.OK || !place) {
                callbackCounter++;
                if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
                return;
              }
              const destinationConfig = createDestinationConfig(place, destination.travelModeEnum || configuration.defaultTravelModeEnum, label);
              getDirections(destinationConfig).then((response) => {
                if (!response) { callbackCounter++; return; }
                destinations.push(destinationConfig);
                getCommutesInfo(response, destinationConfig);
                callbackCounter++;
                if (callbackCounter === configuration.initialDestinations.length) handleAllDestinationsProcessed();
              });
            });
          }
        }
        
        function handleAllDestinationsProcessed() {
            destinations.sort((a, b) => a.label < b.label ? -1 : 1);
            destinations.forEach((dest, i) => {
                assignMapObjectListeners(dest, i);
                updateCommutesPanel(dest, i, commutesWidgetInternal.DestinationOperation.ADD);
            });
        }

        function initCommutesPanel() {
          const container = document.getElementById('commutes-container');
          if (!container) return;
          container.querySelectorAll('.add-button').forEach(addButton => {
            addButton.addEventListener('click', () => {
              destinationModalEl.title.innerHTML = 'Add destination';
              commutesWidgetInternal.hideElement(destinationModalEl.deleteButton);
              commutesWidgetInternal.hideElement(destinationModalEl.editButton);
              commutesWidgetInternal.showElement(destinationModalEl.addButton);
              commutesWidgetInternal.showModal();
            });
          });
        }

        function initCommutesModal() {
          if (!commutesEl.modal || !destinationModalEl.destinationInput) return;
          const autocomplete = new google.maps.places.Autocomplete(destinationModalEl.destinationInput, { fields: ['place_id', 'geometry', 'name'] });
          let destinationToAdd;
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) return;
            destinationToAdd = place;
          });
        }

        function parseTravelModeEnum(travelModeString) {
          switch (travelModeString) {
            case 'DRIVING': return commutesWidgetInternal.TravelMode.DRIVING;
            case 'BICYCLING': return commutesWidgetInternal.TravelMode.BICYCLING;
            case 'TRANSIT': return commutesWidgetInternal.TravelMode.TRANSIT;
            case 'WALKING': return commutesWidgetInternal.TravelMode.WALKING;
            default: return null;
          }
        }

        function setTravelModeLayer(travelModeEnum) {
          if (!commutesMap) return;
          bikeLayer.setMap(travelModeEnum === commutesWidgetInternal.TravelMode.BICYCLING ? commutesMap : null);
          publicTransitLayer.setMap(travelModeEnum === commutesWidgetInternal.TravelMode.TRANSIT ? commutesMap : null);
        }

        function createMarker(location, label) {
          return new google.maps.Marker({
            position: location,
            map: commutesMap,
            label: { text: label || '●', color: label ? '#3C4043' : '#FFF' },
            icon: label ? destinationMarkerIcon : originMarkerIcon
          });
        }

        function getDirections(destination) {
          return new google.maps.DirectionsService().route({
            origin: origin,
            destination: {'placeId': destination.place_id},
            travelMode: google.maps.TravelMode[destination.travelModeEnum],
            unitSystem: google.maps.UnitSystem.METRIC
          });
        }

        function getCommutesInfo(response, destination) {
          const route = response.routes[0];
          const leg = route.legs[0];
          destination.distance = leg.distance.text;
          destination.duration = leg.duration.text;
          destination.marker = createMarker(leg.end_location, destination.label);
          destination.polylines = {
            inner: new google.maps.Polyline({ path: route.overview_path, strokeColor: '#4285F4', strokeWeight: 3, map: commutesMap }),
            outer: new google.maps.Polyline({ path: route.overview_path, strokeColor: '#185ABC', strokeWeight: 6, map: commutesMap })
          };
        }

        function updateCommutesPanel(destination, idx, op) {
          if(commutesEl.initialStatePanel) commutesWidgetInternal.hideElement(commutesEl.initialStatePanel);
          if(commutesEl.destinationPanel) commutesWidgetInternal.showElement(commutesEl.destinationPanel);
        }

        function assignMapObjectListeners(dest, idx) {}
        function getNextMarkerLabel() { return 'A'; }
        function createDestinationConfig(p, mode, label) { return { name: p.name, place_id: p.place_id, label, travelModeEnum: mode }; }
      }
      commutesWidgetInternal.Commutes = Commutes;
      commutesWidgetInternal.hideElement = (el) => el && (el.style.display = 'none');
      commutesWidgetInternal.showElement = (el) => el && (el.style.display = 'flex');
      commutesWidgetInternal.showModal = () => commutesWidgetInternal.showElement(commutesWidgetInternal.commutesEl.modal);
    `;

    if (!commutesGlobalScriptRef.current) {
        const scriptTag = document.createElement('script');
        scriptTag.id = "commutes-logic-script";
        scriptTag.innerHTML = commutesLogic;
        document.body.appendChild(scriptTag);
        commutesGlobalScriptRef.current = scriptTag;
    }
    
    (window as any).initMap = () => {
      if ((window as any).google && (window as any).commutesWidgetInternal?.Commutes && !isInitialized) {
        const CONFIGURATION = {
          "defaultTravelMode": "DRIVING",
          "mapOptions": {"center":{"lat":-1.2822,"lng":36.8211},"zoom":15,"mapId":""}
        };
        new (window as any).commutesWidgetInternal.Commutes(CONFIGURATION);
        setIsInitialized(true);
      }
    };

    if (scriptLoaded && (window as any).google && !isInitialized) {
      (window as any).initMap();
    }

    return () => {
      if (commutesGlobalScriptRef.current) {
        document.body.removeChild(commutesGlobalScriptRef.current);
        commutesGlobalScriptRef.current = null;
      }
      delete (window as any).initMap;
    };
  }, [scriptLoaded]);

  if (apiKeyMissing) {
    return (
      <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-2xl text-center">
        <p className="text-orange-800 font-black uppercase tracking-widest text-[10px] mb-2">Maps Key Missing</p>
        <p className="text-orange-600 text-xs font-medium">Please restrict your API key in the Cloud Console and add it to your .env file.</p>
      </div>
    );
  }

  const mapWidgetHTML = `
    <div id="commutes-container" class="commutes-map-wrapper">
      <div class="map-view" style="height: 400px; width: 100%; border-radius: 2rem;"></div>
      <div class="commutes-info mt-4">
        <div class="commutes-initial-state p-6 bg-white rounded-2xl border-2 border-gray-100 flex justify-between items-center">
          <div>
            <h3 class="font-black text-primary uppercase tracking-tighter">Locate our Nairobi Lab</h3>
            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest">Get directions to East Africa's leading studio</p>
          </div>
          <button class="add-button bg-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Add Destination</button>
        </div>
        <div class="commutes-destinations hide"></div>
      </div>
    </div>
    <div class="commutes-modal-container hide"></div>
  `;

  return (
    <div ref={commutesContainerRef}>
      <div dangerouslySetInnerHTML={{ __html: mapWidgetHTML }} />
      {!apiKeyMissing && (
        <Script
          id="google-maps-commutes-api"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places`}
          strategy="lazyOnload"
          onLoad={() => setScriptLoaded(true)}
        />
      )}
    </div>
  );
};

export default CommutesMapComponent;