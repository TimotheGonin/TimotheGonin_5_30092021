// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ TEST NEW PHOTOGRAPHER                                                        │
// └──────────────────────────────────────────────────────────────────────────────┘

//scope main content box
const mainContent = document.getElementById('main-content');


//create elements
let card = document.createElement('article');
let cardLink = document.createElement('a');

//HEADER--ELEMENTS
let cardHeader = document.createElement('div');
let cardFigure = document.createElement('figure');
let cardPicture = document.createElement('img');
//BODY--ELEMENTS
let cardBody = document.createElement('div');
let cardName = document.createElement('h2');
let cardLocation = document.createElement('p');
let cardSlogan = document.createElement('p');
let cardPrice = document.createElement('p');


//give class name and attribute
card.classList.add('card');
cardLink.setAttribute('href','photographer.html');

//HEADER--CLASS/ATTRIBUTES
cardHeader.classList.add('card__header');
cardFigure.classList.add('card__figure');
cardPicture.setAttribute('src', '../public/img/Photographers_ID_Photos/EllieRoseWilkens.jpg');
//BODY--CLASS/ATTRIBUTES
cardBody.classList.add('card__body');
cardName.classList.add('card__name');
cardLocation.classList.add('card__location');
cardSlogan.classList.add('card__slogan');
cardPrice.classList.add('card__price');


//give child to elements
mainContent.appendChild(card);
card.appendChild(cardLink);

//HEADER--CHILD
cardLink.appendChild(cardHeader);
cardHeader.appendChild(cardFigure);
cardFigure.appendChild(cardPicture);

//BODY--CHILD
cardLink.appendChild(cardBody);
cardBody.appendChild(cardName);
cardBody.appendChild(cardLocation);
cardBody.appendChild(cardSlogan);
cardBody.appendChild(cardPrice);