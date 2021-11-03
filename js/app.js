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

        //LOOP TO DISPLAY THE DATA
        for (let index = 0; index < data.photographers.length; index++) {
            createCard(data, index);
        }
    }
}

getData();

// CREATE PHTOGRAPHER CARD
function createCard(data, index){

    let card = `
        <article class="card">
            <a href="photographer.html">
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
        </article>
    `;
    mainContent.innerHTML += card;

    // //LOOP TAG LIST
    // for (tagValue of data.photographers[index].tags){
    //     let tag = document.createElement('li');
    //     tag.textContent += `#${tagValue}`;
    //     tag.classList.add('tag');
    //     tags.appendChild(tag);
    // }
}


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FACTORY METHOD                                                               │
// └──────────────────────────────────────────────────────────────────────────────┘

// //Create card 
// function card(tag, className){
//     return {
//         //settings
//         tag,
//         className,

//         //method
//         create(){
//             this.element = document.createElement(tag);
//         },
//         setClassName(){
//             this.element.classList.add(className);
//         },
//         launch(parent){
//             parent.append(this.element);
//         }
//     }
// }

// const newCard = card('arcticle', 'cardtest');
// newCard.create();
// newCard.setClassName();
// newCard.launch(mainContent);