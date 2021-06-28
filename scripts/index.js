const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

for (let i = 0; i < initialCards.length; i++) {
  const cardRender = document.querySelector('.card__render');
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = initialCards[i].link;
  cardElement.querySelector('.card__caption').textContent = initialCards[i].name;
  cardElement.querySelector('.card__group').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__group_active');
  });
  cardRender.append(cardElement);
}



const popupEditButtonElement = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__heading');
let userJob = document.querySelector('.profile__sub-heading');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
let nameInput = document.edit.elements.name;
let jobInput = document.edit.elements.job;

const popupAddButtonElement = document.querySelector('.profile__add-button');
let newPlace = document.querySelector('.card__caption');
let newPlaceLink = document.querySelector('.card__image');
const popupPlaceElement = document.querySelector('.popup-place');
const popupPlaceCloseButtonElement = popupPlaceElement.querySelector('.popup__close-button');
const popupPlaceSubmitButtonElement = popupPlaceElement.querySelector('.popup__submit-button');
let namePlaceInput = document.add.elements.place;
let imageLinkInput = document.add.elements.link;

const loveButtonElement = document.querySelector('.card__group');
const trashButtonElement = document.querySelector('.card__trash');

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

const addNewPlace = function() {
  placeTogglePopupVisibility();
}

const placeTogglePopupVisibility = function() {
  newPlace.textContent = namePlaceInput.value;
  newPlaceLink.textContent = imageLinkInput.value;
  popupPlaceElement.classList.toggle('popup-place_opened');
}

const placeFormSubmitHandler = function(evt) {
  evt.preventDefault();
  placeTogglePopupVisibility();
}

popupEditButtonElement.addEventListener('click', pageToInput);
popupAddButtonElement.addEventListener('click', addNewPlace);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupPlaceCloseButtonElement.addEventListener('click', placeTogglePopupVisibility);
document.edit.addEventListener('submit', formSubmitHandler);
document.add.addEventListener('submit', placeFormSubmitHandler);
