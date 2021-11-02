//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);
console.log(pageUrl);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");
console.log(id);

//CIBLING MAIN
const main = document.querySelector('main');

//FETCH FROM JSON
fetch("data/fisheye_data.json")
    .then(response => response.json())
    .then(data => {
        console.table(data.photographers);

        //LOOP ID + STOCK DATA(photographer corresponding to ID in URL)
        for ( photographer of data.photographers){
            // photographerInfo.push(photographer.name);
            // photographerInfo.push(photographer.city);
            // photographerInfo.push(photographer.country);
            // photographerInfo.push(photographer.tags);
            // photographerInfo.push(photographer.tagline);
            // photographerInfo.push(photographer.price);
            // photographerInfo.push(photographer.portrait);
            // console.log(photographerInfo);

            if(photographer.id == id){
                // console.log(`${photographer.id} : ID from .JSON == ${id} Id in URL`);
                // return;
                //fonction => create banner photographe (àfaire);
                // 
            }
        }
    });

function createBanner() {

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
    bannerPicture.setAttribute('src','public/img/Photographers_ID_Photos/TracyGalindo.jpg');
    bannerFooter.classList.add('photographer-banner__footer');
    tags.classList.add('tags');

    //CONTENT
    bannerName.textContent = 'Tracy Galindo';
    bannerLocation.textContent = 'Montreal, Canada';
    bannerSlogan.textContent = 'Photographe freelance';
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
    for (tagValue of tagList){
        let tag = document.createElement('li');
        tag.textContent += tagValue ;
        tag.classList.add('tag');
        tags.appendChild(tag);
    }
}

createBanner();