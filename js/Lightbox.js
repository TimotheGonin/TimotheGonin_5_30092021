class Ligthbox {

    static init (){
        const links = document.querySelectorAll('a[href$=".mp4"], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]')
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Ligthbox(e.currentTarget.getAttribute('href'));
            }))
    }

    /**
     * 
     * @param{string} url URL de l'image
     */
    constructor(url){
        this.element = this.buildDOM(url);
        this.loadImage(url);
        document.body.appendChild(this.element);
    }

    /**
     * 
     * @param{string} url URL de l'image
     */
    loadImage(url){
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container');
        image.src = url;
        container.appendChild(image);
    }

    /**
     * 
     * @param{string} url URL de l'image
     * @return{HTMLElement}
     */
    buildDOM(url){
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
        </div>`;
        return dom;
    }
}