class Banner {
    constructor(){
        this.mainContent = document.querySelector('main');
        this.photographersApi = new PhotographerApi('data/fisheye_data.json');
    }

    async launchBanner(){

        // //req settings
        // const request = await fetch(this.url,{
        //     method: 'GET'
        // });
    
        // //verification - display
        // if(!request.ok){
        //     alert('Un problème est survenu.');
        // } else {
        //     const data = await request.json();
            
        //     //ID url = ID photographer ?
        //     data.photographers
        //         .map(photographer => new Photographer(photographer))
        //         .forEach(photographer => {
        //             if(id === photographer.id){
        //                 const Template = new PhotographerBanner(photographer)
        //                 this.mainContent.prepend(
        //                 Template.createBanner()
        //                 )
        //             }
        //         });
        // }
        const photographersData = await this.photographersApi.getPhotographers()
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                if(id === photographer.id){
                    const Template = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    Template.createBanner()
                    )
                }
            });
    }
}

const photographerDeck = new Banner()
photographerDeck.launchBanner()

//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);

//GET URL PARAMETERS
const id = Number(pageUrl.searchParams.get("id"));