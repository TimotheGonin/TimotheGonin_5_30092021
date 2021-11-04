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
function createCounter(data){

    //CREATE ELEMENT
    let counter = `
        <aside class="photographer-counter">
            <div class="photographer-counter__likes">
                <p>297 081</p>
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


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS / INSTRUCTIONS                                                      │
// └──────────────────────────────────────────────────────────────────────────────┘

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");

//CIBLING MAIN BLOCK
const main = document.querySelector('main');

//FETCH FROM JSON
fetch("data/fisheye_data.json")
    .then(response => response.json())
    .then(data => {

        //LOOP TO DISPLAY THE DATA referring to ID in URL
        for ( photographer of data.photographers){

            if(photographer.id == id){
                createBanner(photographer);
                createCounter(photographer);
            }
        }
    });