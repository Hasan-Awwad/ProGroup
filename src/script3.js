/* global $,Swiper*/
var script = document.createElement('script')
script.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"
document.head.appendChild(script)
script.onload = function () {
  $(document).ready(function () {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  })
};