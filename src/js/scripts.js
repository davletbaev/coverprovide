$(document).ready(() => {
  initMobileNav()
  initSelects()
  initSliders()
  initResizeWatcher()
})

function initMobileNav() {
  $('[data-toggle]').on('click', function(e) {
    if ($.modal.isActive()) {
      $(this).toggleClass('toggle--active')
      $.modal.close()
      return
    }
    
    $(this).toggleClass('toggle--active')
    const target = $(this).data('toggle');
    $(target).modal();
  })
}

function initSliders() {
  function createSlider(elem, options) {
    if (elem.hasClass('slick-initialized')) {
      elem.slick('unslick');
    }

    let defaultOptions = {
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: false,
      ...options
    }

    elem.slick(defaultOptions)
  }

  window.addEventListener('changeDeviceType', (e) => {
    const partnersSlider = $('[data-slick="partners"]')
    const reviewsSlider = $('[data-slick="reviews"]')

    if (e.detail.device === 'desktop') {
      createSlider(partnersSlider, { slidesToShow: 5, slidesToScroll: 5, variableWidth: true, centerMode: false })
      createSlider(reviewsSlider, { slidesToShow: 2, slidesToScroll: 2, variableWidth: false })
    } else if (e.detail.device === 'tablet') {
      createSlider(partnersSlider, { slidesToShow: 3, slidesToScroll: 3, variableWidth: true, centerMode: true })
      createSlider(reviewsSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: false })
    } else {
      createSlider(partnersSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: true, centerMode: true })
      createSlider(reviewsSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: false })
    }
  })
}

function initSelects() {
  $('[data-select]').each(function() {
    $(this).select2({
      minimumResultsForSearch: Infinity
    })
    $(this).on('select2:opening select2:closing', function( event ) {
      var $searchfield = $(this).parent().find('.select2-search__field');
      $searchfield.prop('disabled', true);
  });
  })
}

function initResizeWatcher() {
  let width = $(window).width()
  let currentDevice = getDeviceType(width)

  const event = new CustomEvent('changeDeviceType', { 'detail': { device: currentDevice } })
  window.dispatchEvent(event)

  $(window).on('resize', () => {
    width = $(window).width()
    const device = getDeviceType(width)

    if (device !== currentDevice) {
      currentDevice = device
      event.detail.device = currentDevice
      window.dispatchEvent(event)
    }
  })
}

function getDeviceType(width) {
  if (width >= 1024) {
    return 'desktop'
  } else if (width >= 768 && width < 1024) {
    return 'tablet'
  } else {
    return 'mobile'
  }
}