class MediaCard {
    constructor(media){
        this._media = media
    }
    createMediaCard(){
        let mediaCard = document.createElement('article')
        mediaCard.classList.add('picture-card')
        let content = `
                ${this._media.source}
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${this._media.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${this._media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
        `;
        mediaCard.innerHTML += content
        return mediaCard
    }
}