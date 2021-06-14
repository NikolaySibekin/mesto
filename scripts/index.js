const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');

const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_is-opened');
}

popupEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupSubmitButtonElement.addEventListener('click', togglePopupVisibility);

