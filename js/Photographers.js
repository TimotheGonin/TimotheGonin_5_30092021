class Photographers {
    constructor(){
        this.mainContent = document.getElementById('main-content');
        this.photographersApi = new PhotographerApi('data/fisheye_data.json');
    }

    async launchPhotographers(){

        // //req settings
        // const request = await fetch(this.url,{
        //     method: 'GET'
        // });
    
        // //verification - display
        // if(!request.ok){
        //     alert('Un problème est survenu.');
        // } else {
        //     const data = await request.json();
    
        //     data.photographers
        //         .map(photographer => new Photographer(photographer))
        //         .forEach(photographer => {
        //             const Template = new PhotographerCard(photographer)
        //             this.mainContent.appendChild(
        //                 Template.createCard()
        //             )
        //         });
        // }
        const photographersData = await this.photographersApi.getPhotographers()
        console.log(photographersData)
    }
}

const photographerDeck = new Photographers()
photographerDeck.launchPhotographers()