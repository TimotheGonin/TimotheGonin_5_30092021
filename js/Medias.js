class Medias {
    constructor(){
        this.mainContent = document.getElementById('cards-deck');
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
            const media = data.media;

            const Medias = media
                .map(media => new MediaFactory(media))

            Medias.forEach(element => {
                const Template = new MediaCard(element)
                this.mainContent.append(
                    Template.createMediaCard()
                )
            });
            // const Template = new MediaCard(Medias[0])
            //     this.mainContent.append(
            //         Template.createMediaCard()
            //     )
        }
    }
}

const mediaCardDeck = new Medias()
mediaCardDeck.getData()

