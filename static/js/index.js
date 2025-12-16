$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if (window.bulmaCarousel) {
    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var slides = parseInt(carousel.dataset.slides || '3', 10);
      var autoplay = carousel.dataset.autoplay === 'true';
      var autoplaySpeed = parseInt(carousel.dataset.autoplaySpeed || '3000', 10);

      bulmaCarousel.attach(carousel, {
        slidesToScroll: 1,
        slidesToShow: slides,
        loop: true,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        pauseOnHover: true,
      });
    });
  }
});
