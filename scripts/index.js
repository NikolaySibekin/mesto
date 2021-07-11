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

//popups
const popupEditElement = document.querySelector('.popup-edit');
const popupPlaceElement = document.querySelector('.popup-place');
const popupImageElement = document.querySelector('.popup-image');

//popup open buttons
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');

//popup close buttons
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close-button');
const popupPlaceCloseButtonElement = popupPlaceElement.querySelector('.popup__close-button');
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup-image__close-button');

//popup submit buttons
const popupEditSubmitButtonElement = popupEditElement.querySelector('.popup__submit-button');
const popupPlaceSubmitButtonElement = popupPlaceElement.querySelector('.popup__submit-button');

//inputs edit popup
const userName = document.querySelector('.profile__heading');
const userJob = document.querySelector('.profile__sub-heading');
const nameInput = document.edit.elements.name;
const jobInput = document.edit.elements.job;

//inputs add popup
const placeInput = document.add.elements.place;
const linkInput = document.add.elements.link;

//list of cards
const renderedCard = document.querySelector(".cards__render");

//card template
const cardTemplateContent = document.querySelector("#card-template").content;

function setIventListeners(cardElement) {
  cardElement.querySelector(".card__trash").addEventListener("click", handleDelete);
  cardElement.querySelector(".card__group").addEventListener("click", handleLike);
  cardElement.querySelector(".card__image").addEventListener("click", handleImage);
}

function createCard(elementName, elementLink) {
  const cardElement = cardTemplateContent.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = elementName;
  cardElement.querySelector('.card__image').alt = elementName;
  cardElement.querySelector('.card__image').src = elementLink;
  setIventListeners(cardElement);
  return cardElement;
}

function addCard(container, cardElement) {
  container.append(cardElement);
}

function renderCards(initialCards) {
  initialCards.forEach(function (item) {
    const elementName = item.name;
    const elementLink = item.link;
    addCard(renderedCard, createCard(elementName, elementLink));
  });
}

function handleDelete(event) {
  const cardElement = event.target.closest(".card");
  cardElement.remove();
}

function handleLike(event) {
  event.target.classList.toggle('card__group_active');
}

function togglePopupVisibility(popupElementName) {
  popupElementName.classList.toggle('popup_opened');
}

function handleEdit() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  togglePopupVisibility(popupEditElement);
}

function handleEditSubmit(event) {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  togglePopupVisibility(popupEditElement);
}

function addNewPlace() {
  togglePopupVisibility(popupPlaceElement);
}

function handlePlaceSubmit(event) {
  event.preventDefault();
  const elementName = placeInput.value;
  const elementLink = linkInput.value;
  addCard(renderedCard, createCard(elementName, elementLink));
  togglePopupVisibility(popupPlaceElement);
}

function handleImage(event) {
  const element = event.target;
  const popupImageImage = document.querySelector('.popup-image__image')
  const popupImageCaption = document.querySelector('.popup-image__caption')
  popupImageImage.src = element.src;
  popupImageImage.alt = element.alt;
  popupImageCaption.textContent = element.alt;
  togglePopupVisibility(popupImageElement);
}

popupEditButtonElement.addEventListener('click', handleEdit);
popupAddButtonElement.addEventListener('click', addNewPlace);
popupEditCloseButtonElement.addEventListener('click', function() {
  togglePopupVisibility(popupEditElement);
});
popupPlaceCloseButtonElement.addEventListener('click', function() {
  togglePopupVisibility(popupPlaceElement);
});
popupImageCloseButtonElement.addEventListener('click', function() {
  togglePopupVisibility(popupImageElement);
});
popupEditSubmitButtonElement.addEventListener('submit', handleEditSubmit);
popupPlaceSubmitButtonElement.addEventListener('submit', handlePlaceSubmit);

renderCards(initialCards);
