/**
 * @param{string} media data
 */
class MediaCard {
    constructor(media){
        this._media = media;
    }

    /**
     * 
     * @returns{HTMLElement}
     */
    createMediaCard(){
        let mediaCard = document.createElement('article')
        mediaCard.classList.add('picture-card')
        mediaCard.innerHTML = `
                ${this._media.source}
                <footer class="picture-card__info">
                    <h2 class="picture-card__title">${this._media.title}</h2>
                    <button type="button" class="picture-card__counter-like" aria-label="likes">
                        ${this._media.likes}
                        <i class="fas fa-heart"></i>
                    </button>
                </footer>
                <time datetime="${this._media.date}"></time>
        `;
        return mediaCard
    }
}