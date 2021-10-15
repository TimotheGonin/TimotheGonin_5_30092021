// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ TEST NEW PHOTOGRAPHER                                                        │
// └──────────────────────────────────────────────────────────────────────────────┘

//scope main content box
const mainContent = document.getElementById('main-content');

//create elements
let card = document.createElement('article');
let cardLink = document.createElement('a');
let cardHeader = document.createElement('div');
let cardFigure = document.createElement('figure');
let cardPicture = document.createElement('img');

//give class name 
card.classList.add('card');

//give child to elements
mainContent.appendChild(card);
card.appendChild(cardLink);
cardLink.appendChild(cardHeader);
cardHeader.appendChild(cardFigure);
cardFigure.appendChild(cardPicture);