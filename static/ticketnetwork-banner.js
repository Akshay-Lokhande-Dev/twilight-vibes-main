// TicketNetwork affiliate banners — shared component.
// Injected on every page that includes this script.
// Inserts both banners, stacked, directly after the "← Return to Portal"
// link, before the main content card.
// NOTE: The affiliate <a><img> markup below (href, src, width, height,
// alt, border) is the exact code provided by the affiliate program and
// must not be altered. Only the surrounding wrapper/CSS may be adjusted
// for responsive display.
(function () {
  function insertBanner() {
    var anchors = document.querySelectorAll('a');
    var portalLink = null;
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].textContent.indexOf('Return to Portal') !== -1) {
        portalLink = anchors[i];
        break;
      }
    }
    if (!portalLink) return;

    // Avoid double-insertion if this script somehow runs twice.
    if (document.querySelector('.tn-banner-wrap')) return;

    var style = document.createElement('style');
    style.textContent =
      '.tn-banner-wrap{text-align:center;margin:24px auto;max-width:728px;width:100%;overflow:hidden;}' +
      '.tn-banner-wrap img{max-width:100%;height:auto;display:inline-block;}' +
      '.tn-banner-wrap .tn-banner-item{margin:0 auto 16px;}' +
      '.tn-banner-wrap .tn-banner-item:last-child{margin-bottom:0;}';
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.className = 'tn-banner-wrap';
    wrap.innerHTML =
      '<div class="tn-banner-item">' +
      '<a href="https://www.anrdoezrs.net/click-101731483-12680682" target="_top">' +
      '<img src="https://www.lduhtrp.net/image-101731483-12680682" width="728" height="90" alt="Marshmello Tickets" border="0"/>' +
      '</a>' +
      '</div>' +
      '<div class="tn-banner-item">' +
      '<a href="https://www.jdoqocy.com/click-101731483-12652557" target="_top">' +
      '<img src="https://www.tqlkg.com/image-101731483-12652557" width="300" height="250" alt="iHeartRadio Music Festival" border="0"/>' +
      '</a>' +
      '</div>';

    portalLink.insertAdjacentElement('afterend', wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBanner);
  } else {
    insertBanner();
  }
})();
