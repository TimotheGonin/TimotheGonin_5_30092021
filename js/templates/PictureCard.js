class PictureCard {
    constructor(media){
        this._media = media
    }
    createPictureCard(){
        const pictureCard = `
            <article class="picture-card">
                <figure class="picture-card__image">
                    <img src="public/img/${photographer}/${this._media.image}" alt="">
                </figure>
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${this._media.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${this._media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
            </article>
        `;

        return pictureCard
    }
}