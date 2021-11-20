class Banner {
    constructor(){
        this.mainContent = document.querySelector('main');
        this.photographersApi = new PhotographerApi('data/fisheye_data.json');
        this.mediasApi = new MediaApi('data/fisheye_data.json');
    }

    async launchBanner(){

        const photographersData = await this.photographersApi.getPhotographers()
        const mediasData = await this.mediasApi.getMedias()

        let counter = 0;
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                if(id === photographer.id){
                    //CREATE COUNTER   
                    const Template = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    Template.createBanner()
                    )

                    // INCREMENT COUNTER--LOOP
                    mediasData.forEach(media => {
                        
                        if(id === media.photographerId){
                            counter += media.likes
                        }
                        
                    })

                    //CREATE COUNTER--LOOP
                    mediasData.forEach(media => {
                        const Template = new PhotographerCounter(photographer,counter)
                            this.mainContent.prepend(
                                Template.createCounter()
                            )
                    })
                    
                }
            });
        

            // MODAL LAUCHER
            const contactButton = document.getElementById('contact-btn')
            contactButton.addEventListener('click', () => {
                console.log('event ok');
            })
    }
}

const photographerDeck = new Banner()
photographerDeck.launchBanner()

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = Number(pageUrl.searchParams.get("id"));


// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ TEST MOMDAL                                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘
function displayModal() {
    const modal = document.getElementById("contact-modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
}