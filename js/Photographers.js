class Photographers {
    constructor(){
        this.mainContent = document.getElementById('main-content');
        this.photographersApi = new PhotographerApi('data/fisheye_data.json');
    }

    async launchPhotographers(){

        const photographersData = await this.photographersApi.getPhotographers()
        
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerCard(photographer)
                this.mainContent.appendChild(
                    Template.createCard()
                )
            });
    }
}

const photographerDeck = new Photographers()
photographerDeck.launchPhotographers()