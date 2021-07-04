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

const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupPlaceElement = document.querySelector('.popup-place');
const popupPlaceCloseButtonElement = popupPlaceElement.querySelector('.popup__close-button');
const popupPlaceSubmitButtonElement = popupPlaceElement.querySelector('.popup__submit-button');
const popupImageElement = document.querySelector('.popup-image');
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup-image__close-button');
const userName = document.querySelector('.profile__heading');
const userJob = document.querySelector('.profile__sub-heading');
const nameInput = document.edit.elements.name;
const jobInput = document.edit.elements.job;
const renderedCard = document.querySelector(".card__render");
const cardTemplateContent = document.querySelector("#card-template").content;

function setIventListeners(cardElement) {
  cardElement.querySelector(".card__trash").addEventListener("click", handleDelete);
  cardElement.querySelector(".card__group").addEventListener("click", handleLike);
  cardElement.querySelector(".card__image").addEventListener("click", handleImage);
}

function renderCard(element) {
  const cardElement = cardTemplateContent.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = element.name;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  setIventListeners(cardElement);
  renderedCard.append(cardElement);
}

function renderCards(initialCards) {
  initialCards.forEach(renderCard);
}

function handleDelete(event) {
  const cardElement = event.target.closest(".card");
  cardElement.remove();
}

function handleLike(event) {
  event.target.classList.toggle('card__group_active');
}

function handleEdit() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  togglePopupVisibility();
}

function togglePopupVisibility() {
  popupElement.classList.toggle('popup_opened');
}

function handleSubmit(event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  togglePopupVisibility();
}

function addNewPlace() {
  placeTogglePopupVisibility();
}

function placeTogglePopupVisibility() {
  popupPlaceElement.classList.toggle('popup-place_opened');
}

function handleImage(event) {
  const element = event.target;
  const popupImageImage = document.querySelector('.popup-image__image')
  const popupImageCaption = document.querySelector('.popup-image__caption')
  popupImageImage.src = element.src;
  popupImageCaption.textContent = element.alt;
  imageTogglePopupVisibility(event);
}

function imageTogglePopupVisibility() {
  popupImageElement.classList.toggle('popup-image_opened');
}

function addCard(item) {
  const cardElement = cardTemplateContent.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = item.place.value;
  cardElement.querySelector('.card__image').alt = item.place.value;
  cardElement.querySelector('.card__image').src = item.link.value;
  if (item.place.value !== '') {
    setIventListeners(cardElement);
    renderedCard.append(cardElement);
  }
}

function placeHandleSubmit(event) {
  event.preventDefault();
  const item = document.add.elements;
  addCard(item);
  placeTogglePopupVisibility();
}

popupEditButtonElement.addEventListener('click', handleEdit);
popupAddButtonElement.addEventListener('click', addNewPlace);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupPlaceCloseButtonElement.addEventListener('click', placeTogglePopupVisibility);
popupImageCloseButtonElement.addEventListener('click', imageTogglePopupVisibility);
document.edit.addEventListener('submit', handleSubmit);
document.add.addEventListener('submit', placeHandleSubmit);

renderCards(initialCards);
