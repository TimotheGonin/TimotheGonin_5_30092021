class PhotographerBanner {
    constructor(photographer){
        this._photographer = photographer
    }

    createBanner(){
        //BANNER
        let banner = document.createElement('section');
        banner.classList.add('photographer-banner');

        //BANNER BODY CONTENT
        let bannerBody =`
            <div class="photographer-banner__body">
                <div class="photographer-banner__info">
                    <h1 class="photographer-banner__name">${this._photographer.name}</h1>
                    <p class="photographer-banner__location">${this._photographer.location}</p>
                    <p class="photographer-banner__slogan">${this._photographer.tagline}</p>
                </div>
                <div class="photographer-banner__contact">
                    <button type="button" class="button button-contact" id="contact-btn">Contactez-moi</button>
                </div>
                <figure class="card__figure">
                    <img src="public/img/Photographers_ID_Photos/${this._photographer.portrait}" alt="">
                </figure>
            </div>
        `;

        //GET BANNER BODY CONTENT
        banner.innerHTML += bannerBody;
    
        //FOOTER ELEMENTS
        let bannerFooter = document.createElement('div');
        bannerFooter.classList.add('photographer-banner__footer');
    
        //BANNER FOOTER CHILD
        banner.append(bannerFooter);
        
        //TEST MODAL
        const Template = new ContactModal(this._photographer)
            banner.append(
                Template.createContactModal()
            )
        //LAUNCH
        return banner
    }
    
}