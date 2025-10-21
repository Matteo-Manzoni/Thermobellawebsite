//buy page


document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    initialSlide: 0,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allows clicking on pagination bullets to navigate
    },
  });
});
