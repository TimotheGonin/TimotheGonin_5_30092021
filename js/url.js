// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ FUNCTIONS                                                                    │
// └──────────────────────────────────────────────────────────────────────────────┘

//--CREATE BANNER
function createBanner(data) {

    //BANNER
    let banner = document.createElement('section');
    banner.classList.add('photographer-banner');

    //BANNER BODY CONTENT
    let bannerBody =`
        <div class="photographer-banner__body">
            <div class="photographer-banner__info">
                <h1 class="photographer-banner__name">${photographer.name}</h1>
                <p class="photographer-banner__location">${photographer.city}, ${photographer.country}</p>
                <p class="photographer-banner__slogan">${photographer.tagline}</p>
            </div>
            <div class="photographer-banner__contact">
                <button type="button" class="button button-contact">Contactez-moi</button>
            </div>
            <figure class="card__figure">
                <img src="public/img/Photographers_ID_Photos/${photographer.portrait}" alt="">
            </figure>
        </div>
    `;

    //GET BANNER BODY CONTENT
    banner.innerHTML += bannerBody;

    //FOOTER ELEMENTS
    let bannerFooter = document.createElement('div');
    bannerFooter.classList.add('photographer-banner__footer');
    let tags = document.createElement('ul');
    tags.classList.add('tags');

    //FOOTER CONTENT
    //--loop to get tags
    for (tagValue of photographer.tags){
        let content = `
        <li class="tag"><a href="#">#${tagValue}</a></li>
        `;
        tags.innerHTML += content;
    }

    //BANNER FOOTER CHILD
    banner.append(bannerFooter);
    bannerFooter.append(tags);

    //LAUNCH
    main.prepend(banner);

}

//--CREATE COUNTER
function createCounter(photographer, numberOflikes){

    //CREATE ELEMENT
    let counter = `
        <aside class="photographer-counter">
            <div class="photographer-counter__likes">
                <p>${numberOflikes}</p>
                <i class="fas fa-heart"></i>
            </div>
            <div class="photographer-counter__price">
                <p>${photographer.price}€ / jour</p>
            </div>
        </aside>
    `;

    //INSERT TO  MAIN
    main.innerHTML += counter;
}

function createMedia(data, photographer){
    
    //data needed
    // console.log(data);
    // console.log(data.title);
    // console.log(data.likes);
    // console.log(data.image);
    // console.log(data.video);

    if(data.video){
        //create mediacard type VIDEO
        let videoCard = `
            <article class="picture-card">
                <video class="picture-card__image" controls>
                    <source src="public/img/${photographer}/${data.video}" type="video/mp4">
                </video>
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${data.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${data.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
            </article>
        `;

        mediaCardsDeck.innerHTML += videoCard;

    } else {
        //create mediacard type PICTURE
        let pictureCard = `
            <article class="picture-card">
                <figure class="picture-card__image">
                    <img src="public/img/${photographer}/${data.image}" alt="">
                </figure>
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${data.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${data.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
            </article>
        `;

        mediaCardsDeck.innerHTML += pictureCard;
    }

}
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS / INSTRUCTIONS                                                      │
// └──────────────────────────────────────────────────────────────────────────────┘

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");

//CIBLING MAIN BLOCK
const main = document.querySelector('main');

//CIBLING MEDIA CARDS DECK
const mediaCardsDeck = document.querySelector('.cards-deck');

//INIT COUNTER
let counter = 0;
let photographerName ='';

//FETCH FROM JSON
fetch("data/fisheye_data.json")
    .then(response => response.json())
    .then(data => {

        //CONUTER OF LIKES
        for ( media of data.media){

            if(media.photographerId == id){
                counter += media.likes;
                
                for ( photographer of data.photographers){

                    if(photographer.id == id){
                        photographerName = photographer.name;
                        console.log(photographerName);
                    }
                }

                createMedia(media,photographerName);
            }
        }

        //LOOP TO DISPLAY THE DATA referring to ID in URL
        for ( photographer of data.photographers){

            if(photographer.id == id){
                createBanner(photographer);
                createCounter(photographer, counter);
            }
        }
    });