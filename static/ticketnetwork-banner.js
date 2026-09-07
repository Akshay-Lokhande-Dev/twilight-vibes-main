// TicketNetwork affiliate banners — shared component.
// Injected on every page that includes this script.
//
// Top banners (Marshmello + iHeartRadio): inserted directly after the
// "← Return to Portal" link (character/blog pages) or after the
// breadcrumb bar (reviews pages), before the main content.
//
// NOTE: The affiliate <a><img> markup below (href, src, width, height,
// alt, border) is the exact code provided by the affiliate program and
// must not be altered. Only the surrounding wrapper/CSS may be adjusted
// for responsive display.
(function () {
  function insertBanners() {
    var style = document.createElement('style');
    style.textContent =
      '.tn-banner-wrap{text-align:center;margin:24px auto;max-width:728px;width:100%;overflow:hidden;}' +
      '.tn-banner-wrap img{max-width:100%;height:auto;display:inline-block;}' +
      '.tn-banner-wrap .tn-banner-item{margin:0 auto 16px;}' +
      '.tn-banner-wrap .tn-banner-item:last-child{margin-bottom:0;}' +
      '.tn-banner-wrap-bottom{text-align:center;margin:32px auto;max-width:1200px;width:100%;overflow:hidden;}' +
      '.tn-banner-wrap-bottom img{max-width:100%;height:auto;display:inline-block;}';
    document.head.appendChild(style);

    // Top pair (Marshmello + iHeartRadio)
    if (!document.querySelector('.tn-banner-wrap')) {
      var anchorPoint = null;

      var anchors = document.querySelectorAll('a');
      for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].textContent.indexOf('Return to Portal') !== -1) {
          anchorPoint = anchors[i];
          break;
        }
      }
      if (!anchorPoint) {
        anchorPoint = document.querySelector('.breadcrumb');
      }

      if (anchorPoint) {
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
        anchorPoint.insertAdjacentElement('afterend', wrap);
      }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBanners);
  } else {
    insertBanners();
  }
})();
