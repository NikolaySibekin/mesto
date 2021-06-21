const popupEditButtonElement = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__heading');
let userJob = document.querySelector('.profile__sub-heading');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
let nameInput = document.edit.elements.name;
let jobInput = document.edit.elements.job;

const pageToInput = function() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  togglePopupVisibility();
}

const togglePopupVisibility = function() {
  popupElement.classList.toggle('popup_opened');
}

const formSubmitHandler = function(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    togglePopupVisibility();
}

popupEditButtonElement.addEventListener('click', pageToInput);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
document.edit.addEventListener('submit', formSubmitHandler);
