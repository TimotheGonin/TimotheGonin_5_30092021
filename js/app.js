// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FUNCTIONS                                                                    │
// └──────────────────────────────────────────────────────────────────────────────┘

//--CREATE PHTOGRAPHER CARD
function createCard(data, index){

    //CARD
    let card = document.createElement('article');
    card.classList.add('card');

    // HEADER CONTENT
    let cardHeader = `
        <a href="photographer.html?id=${data.photographers[index].id}">
            <div class="card__header">
                <figure class="card__figure">
                    <img src="public/img/Photographers_ID_Photos/${data.photographers[index].portrait}" alt="" class="card__image">
                </figure>
            </div>
            <div class="card__body">
                <h2 class="card__name">${data.photographers[index].name}</h2>
                <p class="card__location">${data.photographers[index].city}, ${data.photographers[index].country}</p>
                <p class="card__slogan">${data.photographers[index].tagline}</p>
                <p class="card__price">${data.photographers[index].price}€/jour</p>
            </div>
        </a>
    `;
    //GET HEADER CONTENT
    card.innerHTML += cardHeader;

    //FOOTER--ELEMENTS
    let cardFooter = document.createElement('footer');
    cardFooter.classList.add('card__footer');
    let cardActions = document.createElement('div');
    cardActions.classList.add('card__actions');
    let tags = document.createElement('ul');
    tags.classList.add('tags');

    //FOOTER CONTENT
    //--loop to get tags
    for (tagValue of data.photographers[index].tags){
        let content = `
        <li class="tag"><a href="#">#${tagValue}</a></li>
        `;
        tags.innerHTML += content;
    }

    //FOOTER--CHILD
    cardFooter.appendChild(cardActions); 
    card.appendChild(cardFooter);
    cardActions.appendChild(tags);

    //LAUNCH
    mainContent.append(card);
}

//--FETCH / GET DATA

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

        //LOOP TO DISPLAY THE DATA
        for (let index = 0; index < data.photographers.length; index++) {
            createCard(data, index);
        }
    }
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS / INSTRUCTIONS                                                      │
// └──────────────────────────────────────────────────────────────────────────────┘
//scope main content box
const mainContent = document.getElementById('main-content');

//get url cont
const url = 'data/fisheye_data.json';


getData();