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

const popupOpened = (popupElementName) => {
  popupElementName.classList.add('popup_opened');
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      popupElementName.classList.remove('popup_opened');
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target != event.currentTarget) {
      return
    }
    popupElementName.classList.remove('popup_opened');
  });
};

const handleEdit = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  popupOpened(popupEditElement);
};

const handleEditSubmit = (event) => {
  event.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  popupClosed(popupEditElement);
};

const addNewPlace = () => {
  popupOpened(popupPlaceElement);
};

const handlePlaceSubmit = (event) => {
  event.preventDefault();
  const elementName = placeInput.value;
  const elementLink = linkInput.value;
  addCard(renderedCard, createCard(elementName, elementLink));
  popupClosed(popupPlaceElement);
};

const handleImage = (event) => {
  const element = event.target;
  const popupImageImage = document.querySelector('.popup-image__image')
  const popupImageCaption = document.querySelector('.popup-image__caption')
  popupImageImage.src = element.src;
  popupImageImage.alt = element.alt;
  popupImageCaption.textContent = element.alt;
  popupOpened(popupImageElement);
};


popupEditButtonElement.addEventListener('click', handleEdit);
popupAddButtonElement.addEventListener('click', addNewPlace);
popupEditCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupEditElement);
});
popupPlaceCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupPlaceElement);
});
popupImageCloseButtonElement.addEventListener('click', () => {
  popupClosed(popupImageElement);
});
popupEditSubmitButtonElement.addEventListener('click', handleEditSubmit);
popupPlaceSubmitButtonElement.addEventListener('click', handlePlaceSubmit);



renderCards(initialCards);

