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
                    const Template = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    Template.createBanner()
                    )

                    // CREATE BANNER
                    console.log(photographer.price)
                    mediasData.forEach(media => {
                        
                        if(id === media.photographerId){
                            counter += media.likes
                        }
                        
                    })
                    mediasData.forEach(media => {
                        
                        const Template = new PhotographerCounter(photographer,counter)
                            this.mainContent.prepend(
                                Template.createCounter()
                            )
                        
                    })

                    
                }
            });
            console.log(counter)
    }
}

const photographerDeck = new Banner()
photographerDeck.launchBanner()

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = Number(pageUrl.searchParams.get("id"));
