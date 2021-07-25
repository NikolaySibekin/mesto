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

// card's image and caption
const popupImageImage = document.querySelector('.popup-image__image')
const popupImageCaption = document.querySelector('.popup-image__caption')

//forms
const formEdit = document.getElementById('form-edit');
const formAdd = document.getElementById('form-add');

const setIventListeners = (cardElement) => {
  cardElement.querySelector(".card__trash").addEventListener("click", handleDelete);
  cardElement.querySelector(".card__group").addEventListener("click", handleLike);
  cardElement.querySelector(".card__image").addEventListener("click", handleImage);
};

const createCard = (elementName, elementLink) => {
  const cardElement = cardTemplateContent.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = elementName;
  cardElement.querySelector('.card__image').alt = elementName;
  cardElement.querySelector('.card__image').src = elementLink;
  setIventListeners(cardElement);
  return cardElement;
};

const addCard = (container, cardElement) => {
  container.prepend(cardElement);
};

const renderCards = (initialCards) => {
  initialCards.forEach(function (item) {
    const elementName = item.name;
    const elementLink = item.link;
    addCard(renderedCard, createCard(elementName, elementLink));
  });
};

const handleDelete = (event) => {
  const cardElement = event.target.closest(".card");
  cardElement.remove();
};

const handleLike = (event) => {
  event.target.classList.toggle('card__group_active');
};

const escapeCode = 'Escape';

const closePopupEsc = (event) => {
  if (event.code === escapeCode) {
    const openedPopup = document.querySelector('.popup_opened');
    popupClosed(openedPopup);
  }
};

const closeByClickOnOverlay = (event) => {
  if (event.target.classList.contains('popup')) {
    const openedPopup = document.querySelector('.popup_opened');
    popupClosed(openedPopup);
  }
};

const popupOpened = (popupElementName) => {
  popupElementName.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("click", closeByClickOnOverlay);
};

const popupClosed = (popupElementName) => {
  popupElementName.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("click", closeByClickOnOverlay);
};

function handleEdit() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  popupOpened(popupEditElement);
}

function handleEditSubmit() {
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  popupClosed(popupEditElement);
};

function handlePlaceSubmit() {
  const elementName = placeInput.value;
  const elementLink = linkInput.value;
  popupClosed(popupPlaceElement);
  addCard(renderedCard, createCard(elementName, elementLink));
  formAdd.reset();
  popupClosed(popupPlaceElement);
  popupPlaceSubmitButtonElement.setAttribute('disabled', true);
  popupPlaceSubmitButtonElement.classList.add('popup__submit-button_inactive');
};

const handleImage = (event) => {
  const element = event.target;
  popupImageImage.src = element.src;
  popupImageImage.alt = element.alt;
  popupImageCaption.textContent = element.alt;
  popupOpened(popupImageElement);
};


popupEditButtonElement.addEventListener('click', () => {
  handleEdit();
});
popupAddButtonElement.addEventListener('click', () => {
  popupOpened(popupPlaceElement);
});

popupEditCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupEditElement);
});
popupPlaceCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupPlaceElement);
});
popupImageCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupImageElement);
});

formEdit.addEventListener('submit', handleEditSubmit);
formAdd.addEventListener('submit', handlePlaceSubmit);

renderCards(initialCards)
