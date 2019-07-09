//pull down
$(document).ready(function () {
  $('.outer-menu').hover(function () {
    $(this).find('.inner-menu').css('display', 'block');
  }, function () {
    $(this).find('.inner-menu').css('display', 'none');
  });
});

// page
$(document).ready(function () {
  $('#main-section').imagesLoaded(function () {
    $('#main-section').masonry({
      itemSelector: '.paper',
      columnWidth: 230,
      isAnimated: true
    });
  });
});

// light box
$(document).ready(function () {
  function showLightBox() {
    $('#darken-background').show();
    $('#darken-background').css('top', $(window).scrollTop());
    $('body').css('overflow', 'hidden');
  }
  function hideLightBox() {
    $('#darken-background').hide();
    $('body').css('overflow', '');
  }
  $('#darken-background').click(function () {
    hideLightBox();
  });
  $('.paper').click(function () {
    showLightBox();
  });
  $('#lightBox').click(function (event) {
    event.stopPropagation();
  });
});

