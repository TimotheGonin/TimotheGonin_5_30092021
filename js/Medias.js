class Medias {
    constructor(){
        this.mainContent = document.getElementById('media-cards-deck');
        this.mediasApi = new MediaApi('data/fisheye_data.json');
    }

    async launchMedias(){

        const mediasData = await this.mediasApi.getMedias()

        mediasData
            .map(media => new MediaFactory(media))
            .forEach(media => {
                if(id === media.photographerId){
                    const Template = new MediaCard(media)
                    this.mainContent.append(
                    Template.createMediaCard()
                    )
                }
            });
            Ligthbox.init();
            Likes.init();
    }
}

const mediaCardDeck = new Medias();
mediaCardDeck.launchMedias();