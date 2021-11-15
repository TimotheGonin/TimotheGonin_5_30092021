class PhotographerCard {
    constructor(photographer){
        this._photographer = photographer
    }

    createCard(){
        //CARD
        const card = document.createElement('article');
        card.classList.add('card');
    
        // HEADER CONTENT
        let cardHeader = `
            <a href="photographer.html?id=${this._photographer.id}">
                <div class="card__header">
                    <figure class="card__figure">
                        <img src="public/img/Photographers_ID_Photos/${this._photographer.portrait}" alt="" class="card__image">
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
        
    
        // FOOTER--ELEMENTS
        let cardFooter = document.createElement('footer');
        cardFooter.classList.add('card__footer');
        let cardActions = document.createElement('div');
        cardActions.classList.add('card__actions');
        let tags = document.createElement('ul');
        tags.classList.add('tags');
    
        //FOOTER CONTENT
        this._photographer.tags.forEach(tag => {
            let content = `
                <li class="tag"><a href="#">#${tag}</a></li>
            `;
            tags.innerHTML += content;
        });

        
        //GET HEADER CONTENT
        card.innerHTML += cardHeader;

        // GET FOOTER CONTENT
        cardFooter.appendChild(cardActions); 
        card.appendChild(cardFooter);
        cardActions.appendChild(tags);
        
        //LAUNCH
        return card
    }
}