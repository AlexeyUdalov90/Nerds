'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var feedbackButton = document.querySelector('.adress__button');
  var feedbackPopup = document.querySelector('.feedback-popup');
  var pageOverlay = document.querySelector('.page-main__overlay');
  var closePopup = feedbackPopup.querySelector('.feedback-popup__button-close');

  var showPopupHandler = function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('feedback-popup--active');
    pageOverlay.classList.add('page-main__overlay--active');
    document.addEventListener('keydown', escPressHandler);
  };

  var closePopupHandler = function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('feedback-popup--active');
    pageOverlay.classList.remove('page-main__overlay--active');
    document.removeEventListener('keydown', escPressHandler);
  };

  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      feedbackPopup.classList.remove('feedback-popup--active');
      pageOverlay.classList.remove('page-main__overlay--active');
    }
  };

  feedbackButton.addEventListener('click', showPopupHandler);
  closePopup.addEventListener('click', closePopupHandler);
})();
