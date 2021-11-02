//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);
console.log(pageUrl);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");
console.log(id);

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


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ BANNER                                                                       │
// └──────────────────────────────────────────────────────────────────────────────┘
function createBanner(data) {

    //BLOCKS
    let banner = document.createElement('section');
    let bannerBody = document.createElement('div');
    let bannerInfo = document.createElement('div');
    let bannerContact = document.createElement('div');

    //ELEMENTS
    let bannerName = document.createElement('h1');
    let bannerLocation = document.createElement('p');
    let bannerSlogan = document.createElement('p');
    let contactButton = document.createElement('button');
    let bannerFigure = document.createElement('figure');
    let bannerPicture = document.createElement('img');

    let bannerFooter = document.createElement('div');
    let tags = document.createElement('ul');
    let tagList = ['#art', '#fashion', '#events'];

    //ADD CLASS - ATTRIBUTE
    banner.classList.add('photographer-banner');
    bannerBody.classList.add('photographer-banner__body');
    bannerInfo.classList.add('photographer-banner__info');
    bannerContact.classList.add('photographer-banner__contact');

    bannerName.classList.add('photographer-banner__name');
    bannerLocation.classList.add('photographer-banner__location');
    bannerSlogan.classList.add('photographer-banner__slogan');
    contactButton.classList.add('button');
    contactButton.classList.add('button-contact');
    bannerFigure.classList.add('card__figure');
    bannerPicture.setAttribute('src',`public/img/Photographers_ID_Photos/${photographer.portrait}`);
    bannerFooter.classList.add('photographer-banner__footer');
    tags.classList.add('tags');

    //CONTENT
    bannerName.textContent = `${photographer.name}`;
    bannerLocation.textContent = `${photographer.city}, ${photographer.country}`;
    bannerSlogan.textContent = `${photographer.tagline}`;
    contactButton.textContent = 'Contactez-moi';

    //CHILD
    main.prepend(banner);
    banner.append(bannerBody);
    bannerBody.append(bannerInfo);
    bannerInfo.append(bannerName);
    bannerInfo.append(bannerLocation);
    bannerInfo.append(bannerSlogan);
    bannerBody.append(bannerContact);
    bannerContact.append(contactButton);
    bannerBody.append(bannerFigure);
    bannerFigure.append(bannerPicture);
    banner.append(bannerFooter);
    bannerFooter.append(tags);

    //LOOP TAG LIST
    for (tagValue of photographer.tags){
        let tag = document.createElement('li');
        tag.textContent += `#${tagValue}`;
        tag.classList.add('tag');
        tags.appendChild(tag);
    }
}


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ COUNTER                                                                      │
// └──────────────────────────────────────────────────────────────────────────────┘
function createCounter(data){
    //BLOCKS
    let counter = document.createElement('aside');
    let counterLikes = document.createElement('div');
    let counterPrice = document.createElement('div');

    //CONTENT
    let numberLikes = document.createElement('p');
    let likesIcon = document.createElement('i');
    let price = document.createElement('p');

    //ADD CLASS
    counter.classList.add('photographer-counter');
    counterLikes.classList.add('photographer-counter__likes');
    counterPrice.classList.add('photographer-counter__price');
    likesIcon.classList.add('fas');
    likesIcon.classList.add('fa-heart');

    //CONTENT
    numberLikes.textContent = "123 456";
    price.textContent = `${photographer.price}€ / jour`;

    //CHILD
    main.append(counter);
    counter.append(counterLikes);
    counter.append(counterPrice);
    counterLikes.append(numberLikes);
    counterLikes.append(likesIcon);
    counterPrice.append(price);

}