$(document).ready(() => {
  initSliders();
})

function initSliders() {
  $('[data-slick]').each(function() {
    const type = $(this).data('slick')

    let options = {
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    }

    switch (type) {
      case 'partners':
        options.slidesToShow = 5
        options.slidesToScroll = 5
        options.variableWidth = true
        break
      case 'reviews':
        options.slidesToShow = 2
        options.slidesToScroll = 2
        break
    }

    $(this).slick(options)
  })
  
}