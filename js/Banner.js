class Banner {
    constructor(){
        this.mainContent = document.querySelector('main');
        this.photographersApi = new PhotographerApi('data/fisheye_data.json');
        this.mediasApi = new MediaApi('data/fisheye_data.json');
    }

    async launchBanner(){

        const photographersData = await this.photographersApi.getPhotographers()
        const mediasData = await this.mediasApi.getMedias()

        let numberOfLikes = 0;
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                if(id === photographer.id){
                    //CREATE BANNER
                    const Template = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    Template.createBanner()
                    )

                    // INCREMENT COUNTER--LOOP
                    mediasData.forEach(media => {
                        
                        if(id === media.photographerId){
                            numberOfLikes += media.likes
                        }
                        
                    })

                    //CREATE COUNTER
                    const counter = new PhotographerCounter(photographer,numberOfLikes)
                        this.mainContent.prepend(
                            counter.createCounter()
                        )
                }
            });
        

            // MODAL LAUCHER EVENTS
            const contactButton = document.getElementById('contact-btn');
            contactButton.addEventListener('click', displayModal);

            // SUBMIT BUTTON--modal
            const submitButtonModal = document.getElementById('contact-submit-button');
            submitButtonModal.addEventListener('click', (e) => {
                e.preventDefault();

                //SHOW USER DATA
                const firstName = document.querySelector('#firstName');
                const lastName = document.querySelector('#lastName');
                const email = document.querySelector('#email');
                const userTextArea = document.querySelector('#userTextArea');
                console.log(firstName.value);
                console.log(lastName.value);
                console.log(email.value);
                console.log(userTextArea.value);

                //REDIRECTION
                // let origin = pageUrl.origin;
                // let pathName = pageUrl.pathname;
                // let search = pageUrl.search;

                // let urlRedirect = `${origin}${pathName}${search}`;
                
                // document.location.href=`${urlRedirect}`;
            });
    }
}

const photographerDeck = new Banner()
photographerDeck.launchBanner()

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = Number(pageUrl.searchParams.get("id"));

//SIBLING SMALL CONTACT FORM BUTTON
const contactButtonSmall = document.getElementById('contact-btn--small');
contactButtonSmall.addEventListener('click', displayModal);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CONTACT MODAL LAUNCHER FUNCTION                                              │
// └──────────────────────────────────────────────────────────────────────────────┘ 
function displayModal() {
    const modal = document.getElementById("contact-modal");
	modal.classList.remove('sr-only');
    modal.style.display='flex';
    document.querySelector('header').setAttribute('aria-hidden','true');    
    document.querySelector('main').setAttribute('aria-hidden','true');
}