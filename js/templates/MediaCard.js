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
                    <div class="picture-card__counter-like">
                        <p class="picture-card__counter-like-value">${this._media.likes}</p>
                        <button type="button" class="picture-card__counter-like-action" aria-label="likes">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </footer>
                <time datetime="${this._media.date}"></time>
        `;
        return mediaCard
    }
}