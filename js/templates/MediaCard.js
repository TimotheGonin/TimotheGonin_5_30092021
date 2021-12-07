class MediaCard {
    constructor(media){
        this._media = media;
        this._element = this.createMediaCard();
    }

    liking(){
        // const mediaCounter = this._element.querySelector('.picture-card__counter-like p').textContent;
        // const mediaCounterValue = Number(mediaCounter);
        // console.log(mediaCounterValue);
        const counterBox = this._element.querySelector('.picture-card__counter-like');
        const counter = this._element.querySelector('.picture-card__counter-like p');
        const newCounter = document.createElement('p');
        newCounter.innerText = `New Value Lauched`;
        counterBox.removeChild(counter);
        counterBox.appendChild(newCounter);
        console.log(counterBox);
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
                    <h3 class="picture-card__title">${this._media.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${this._media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
        `;
        mediaCard.querySelector('.picture-card__counter-like').addEventListener('click' , this.liking.bind(this));
        return mediaCard
    }
}