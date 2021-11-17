class MediaCard {
    constructor(media){
        this._media = media
    }
    createMediaCard(){
        const mediaCard = `
            <article class="picture-card">
                ${this._media.source}
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${this._media.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${this._media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
            </article>
        `;

        return mediaCard
    }
}