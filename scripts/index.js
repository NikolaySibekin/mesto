const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
let nameInput = document.edit.elements.name;
let jobInput = document.edit.elements.job;

const pageToInput = function() {
  nameInput.value = document.querySelector('.profile__heading').textContent;
  jobInput.value = document.querySelector('.profile__sub-heading').textContent;
}

const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_opened');
  pageToInput();
}

const formSubmitHandler = function(evt) {
    evt.preventDefault();
    document.querySelector('.profile__heading').value = nameInput.textContent;
    document.querySelector('.profile__sub-heading').value = jobInput.textContent;
    togglePopupVisibility ;
}

popupEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupSubmitButtonElement.addEventListener('submit', formSubmitHandler);
