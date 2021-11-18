class Medias {
    constructor(){
        this.mainContent = document.getElementById('media-cards-deck');
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
            
            //ID url = ID photographer ?
            data.media
                .map(media => new MediaFactory(media))
                .forEach(element => {
                    if(id === element.photographerId){
                        const Template = new MediaCard(element)
                        this.mainContent.append(
                        Template.createMediaCard()
                        )
                    }
                });
        }
    }
}

const mediaCardDeck = new Medias()
mediaCardDeck.getData()