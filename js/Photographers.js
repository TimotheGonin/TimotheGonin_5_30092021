class Photographers {
    constructor(){
        this.mainContent = document.getElementById('main-content');
        this.url = 'data/fisheye_data.json'
    }

    async getData(){

        //req settings
        const request = await fetch(this.url,{
            method: 'GET'
        });
    
        //verification - display
        if(!request.ok){
            alert('Un problème est survenu.');
        } else {
            const data = await request.json();
    
            data.photographers
                .map(photographer => new Photographer(photographer))
                .forEach(photographer => {
                    const Template = new PhotographerCard(photographer)
                    this.mainContent.appendChild(
                        Template.createCard()
                    )
                });
        }
    }
}

const photographerDeck = new Photographers()
photographerDeck.getData()