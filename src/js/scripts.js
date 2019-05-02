$(document).ready(() => {
  initSliders();
  initSelects();
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