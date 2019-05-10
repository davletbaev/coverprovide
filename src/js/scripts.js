let prevScroll;

$(document).ready(() => {
  objectFitImages()
  initSelects()
  initMobileNav()
  initSliders()
  initResizeWatcher()
  initTableLayout()
  initNumericFields()

})


function initMobileNav() {
  $('[data-toggle]').on('click', function(e) {
    if ($.modal.isActive()) {
      $(this).toggleClass('toggle--active')
      $('body').toggleClass('open-modal')
      window.scrollTo(0, prevScroll)
      $.modal.close()
      return
    }
    
    prevScroll = window.pageYOffset
    $('body').toggleClass('open-modal')
    $(this).toggleClass('toggle--active')
    const target = $(this).data('toggle')
    $(target).modal()
  })
}

function initSliders() {
  if ($('.slider').length) {
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

function initTableLayout() {
  $('body').on('click', '[data-toggle]', function(e) {
    e.preventDefault()

    const target = $(this).data('toggle');
    $('body').toggleClass(`open-${target}`);
  })
}

function initNumericFields() {
  const fields = $('[data-numeric]')

  if (fields.length) {
    fields.each(function() {
      createNumericField(this);
    })
  }
}

const createNumericField = function(el) {
  const input = $(el).find('input')[0]

  const numericAdd = (e) => {
    e.preventDefault()

    let value = +input.value
    const max = +input.getAttribute('max')
    const step = +input.getAttribute('step')

    value = value + step

    if ((max !== undefined) && (value > max)) {
      input.value = max
    } else {
      input.value = value
    }
  }

  const numericSubtract = (e) => {
    e.preventDefault()

    let value = +input.value
    const min = +input.getAttribute('min')
    const step = +input.getAttribute('step')

    value = value - step


    if ((min !== undefined) && (value < min)) {
      input.value = min
    } else {
      input.value = value
    }
  }

  const numericClear = (e) => {
    e.preventDefault()
    
    input.value = ''
  }

  $(el).on('click', '[data-add]', numericAdd)
  $(el).on('click', '[data-subtract]', numericSubtract)
  $(el).on('click', '[data-clear]', numericClear)
}

function initSelects() {
  let timer;

  $('select').on('change', function(e) {
    const valContainer = $(this).siblings('[data-value-container]')
    const selected = $(this).find(":selected")

    let values = [];
    selected.each(function() {
      values.push(this.innerText)
    })

    valContainer.text(values.join(', '))
  })

  $('select').on('mouseenter', function(e) {
    clearTimeout(timer)
    this.focus()
  })

  $('select').on('mouseleave', function(e) {
    timer = setTimeout(() => {
      this.blur()
    }, 400)
  })
}