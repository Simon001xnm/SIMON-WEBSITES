'use client';

import Script from 'next/script';

export function GoogleReviewsBadge() {
  return (
    <>
      <Script
        id="google-reviews-badge-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.renderBadge = function() {
              // Ensure we don't duplicate the badge container
              if (document.getElementById('google-reviews-container')) return;

              var ratingBadgeContainer = document.createElement("div");
              ratingBadgeContainer.id = 'google-reviews-container';
              document.body.appendChild(ratingBadgeContainer);
              
              if (window.gapi) {
                window.gapi.load('ratingbadge', function() {
                  window.gapi.ratingbadge.render(ratingBadgeContainer, {
                    "merchant_id": 5532241116,
                    "position": "BOTTOM_LEFT"
                  });
                });
              }
            }
          `,
        }}
      />
      <Script
        src="https://apis.google.com/js/platform.js?onload=renderBadge"
        strategy="afterInteractive"
      />
    </>
  );
}
