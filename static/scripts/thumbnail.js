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

document.addEventListener('DOMContentLoaded', function() {
    var paymentButton = document.getElementById('discount-offer2');
    var paymentSection = document.getElementById('offer-container'); // Confirm the ID here

    paymentButton.addEventListener('click', function() {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var paymentButton = document.getElementById('payment-button');
    var paymentSection = document.getElementById('form-container'); // Confirm the ID here

    paymentButton.addEventListener('click', function() {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var paymentButton = document.getElementById('payment-button2');
    var paymentSection = document.getElementById('form-container'); // Confirm the ID here

    paymentButton.addEventListener('click', function() {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    });
});