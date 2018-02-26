'use strict';
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var sliderToggles = document.querySelectorAll('.slider__toggle');
  var slideActive;
  var sliderToggleActive;

  slides.forEach(function (slide) {
	  if (slide.classList.contains('slider__item--active')) {
		  slideActive = slide;
	  }
  });

  sliderToggles.forEach(function (sliderToggle) {
    if (sliderToggle.classList.contains('slider__toggle--active')) {
		  sliderToggleActive = sliderToggle;
	  }

	  sliderToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
		  if (!evt.target.classList.contains('slider__toggle--active')) {
        sliderToggleActive.classList.remove('slider__toggle--active');
        evt.target.classList.add('slider__toggle--active');
        sliderToggleActive = evt.target;

        for (var i = 0; i < slides.length; i++) {
          if (slides[i].id === evt.target.dataset.slide) {
            slideActive.classList.remove('slider__item--active');
            slides[i].classList.add('slider__item--active');
            slideActive = slides[i];

            break;
          }
        }
      }
	  });
  });
})();
