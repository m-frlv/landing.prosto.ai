$(document).ready(function () {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemCenter = elemTop + $(elem).height() / 2;

    return ((elemCenter <= docViewBottom) && (elemCenter >= docViewTop));
  }

  //Параллакс
  $('section.project-purpose-section, .cycle-section-wrapper').mousemove(function (e) {
    var x = -(e.pageX + this.offsetLeft) / 20
    var y = -(e.pageY + this.offsetTop) / 20

    var animateBackground = anime({
      targets: e.currentTarget,
      backgroundPosition: x + 'px ' + y + 'px'
    })

    animateBackground.restart();
  })

  //Масштабирование
  $('.audience-section img, .variants-wrapper > .variant').mouseenter(function (e) {
    var animateSize = anime({
      targets: e.currentTarget,
      scale: 1.1,
      translateY: '-10px'
    })

    animateSize.restart();
  })

  $('.audience-section img, .variants-wrapper > .variant').mouseleave(function (e) {
    var animateSize = anime({
      targets: e.currentTarget,
      scale: 1,
      easing: 'easeOutExpo',
      translateY: '0'
    })

    animateSize.restart();
  })

  $('section.guaranties-section').css('background-size', '0')

  $(window).scroll(function (e) {
    var elem = 'section.guaranties-section'

    var animateBacckgroundSize = anime({
      targets: 'section.guaranties-section',
      backgroundSize: '1735px',
      easing: 'easeOutExpo',
      autoplay: false,
      duration: 4000
    })

    if (isScrolledIntoView(elem)) {
      animateBacckgroundSize.restart()
    }
  })
})