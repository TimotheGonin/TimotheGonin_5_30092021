/**
 * @param{string} photographer data
 */
class PhotographerCard {

    constructor(photographer){
        this._photographer = photographer
    }

    /**
     * 
     * @returns{HTMLElement}
     */
    createCard(){
        
        const card = document.createElement('article');
        card.classList.add('card');
    
        card.innerHTML = `
            <a href="photographer.html?id=${this._photographer.id}">
                <div class="card__header">
                    <figure class="card__figure">
                        <img src="public/img/Photographers_ID_Photos/${this._photographer.portrait}" alt="${this._photographer.name}" class="card__image">
                    </figure>
                </div>
                <div class="card__body">
                    <h2 class="card__name">${this._photographer.name}</h2>
                    <p class="card__location">${this._photographer.location}</p>
                    <p class="card__slogan">${this._photographer.tagline}</p>
                    <p class="card__price">${this._photographer.price}€/jour</p>
                </div>
            </a>
        `;
        
        //LAUNCH
        return card
    }
}