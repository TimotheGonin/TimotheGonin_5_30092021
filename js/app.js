// ┌──────────────────────────────────────────────────────────────────────────────┐
// │NEW PHOTOGRAPHER                                                              │
// └──────────────────────────────────────────────────────────────────────────────┘

//scope main content box
const mainContent = document.getElementById('main-content');


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FETCH                                                                        │
// └──────────────────────────────────────────────────────────────────────────────┘
const url = 'data/fisheye_data.json';

async function getData(){

    //req settings
    const request = await fetch(url,{
        method: 'GET'
    });

    //verification - display
    if(!request.ok){
        alert('Un problème est survenu.');
    } else {
        let data = await request.json();
        
        createCard(data);
    }
}

getData();

// CREATE PHTOGRAPHER CARD
function createCard(data){

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
    //FOOTER--ELEMENTS
    let cardFooter = document.createElement('footer');
    let cardActions = document.createElement('div');
    let tags = document.createElement('ul');
    //FOOTER--DATA
    let tagList = ['#sport', '#architecture'];


    //give class name and attribute
    card.classList.add('card');
    cardLink.setAttribute('href',`photographer.html?id=${data.photographers[1].id}`);


    //HEADER--CLASS/ATTRIBUTES
    cardHeader.classList.add('card__header');
    cardFigure.classList.add('card__figure');
    cardPicture.setAttribute('src', `public/img/Photographers_ID_Photos/${data.photographers[1].portrait}`);
    //BODY--CLASS
    cardBody.classList.add('card__body');
    cardName.classList.add('card__name');
    cardLocation.classList.add('card__location');
    cardSlogan.classList.add('card__slogan');
    cardPrice.classList.add('card__price');
    //BODY--TEXTCONTENT
    cardName.textContent = data.photographers[1].name;
    cardLocation.textContent = `${data.photographers[1].city}, ${data.photographers[1].country}`;
    cardSlogan.textContent = `${data.photographers[1].tagline}`;
    cardPrice.textContent = `${data.photographers[1].price}/jours`;
    //FOOTER--CLASS
    cardFooter.classList.add('card__footer');
    cardActions.classList.add('card__actions');
    tags.classList.add('card__tags');

    //give child to elements
    mainContent.appendChild(card);
    card.appendChild(cardLink);
    card.appendChild(cardFooter);

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
    //FOOTER--CHILD
    cardFooter.appendChild(cardActions);
    cardActions.appendChild(tags);


    //LOOP TAG LIST
    for (tagValue of data.photographers[1].tags){
        let tag = document.createElement('li');
        tag.textContent += `#${tagValue}`;
        tag.classList.add('tag');
        tags.appendChild(tag);
    }
}


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FACTORY METHOD                                                               │
// └──────────────────────────────────────────────────────────────────────────────┘

//Create card 
function card(tag, className){
    return {
        //settings
        tag,
        className,

        //method
        create(){
            this.element = document.createElement(tag);
        },
        setClassName(){
            this.element.classList.add(className);
        },
        launch(parent){
            parent.append(this.element);
        }
    }
}

const newCard = card('arcticle', 'cardtest');
newCard.create();
newCard.setClassName();
newCard.launch(mainContent);