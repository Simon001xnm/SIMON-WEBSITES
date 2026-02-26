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
              var ratingBadgeContainer = document.createElement("div");
              document.body.appendChild(ratingBadgeContainer);
              window.gapi.load('ratingbadge', function() {
                window.gapi.ratingbadge.render(ratingBadgeContainer, {
                  "merchant_id": 5532241116,
                  "position": "BOTTOM_LEFT"
                });
              });
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
