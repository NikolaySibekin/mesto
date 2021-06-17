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

let formElement = document.querySelector('form');
let nameInput = formElement.elements.name;
let jobInput = formElement.elements.job;

function formSubmitHandler (evt) {
    evt.preventDefault();

    let userName = nameInput.value;
    let userJob = jobInput.value;

    nameInput = formElement.elements.name;
    jobInput = formElement.elements.job;
    
    nameInput.textContent = userName;
    jobInput.textContent = userJob;
}

formElement.addEventListener('submit', formSubmitHandler);
