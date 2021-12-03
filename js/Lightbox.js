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
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        document.addEventListener('keyup', this.onKeyUp);
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

    // KEYBORD EVENT
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e){
        if(e.key === 'Escape'){
            this.close(e);
        }
    }

    /**
     * Close lightbox
     * @param {MouseEvent} e 
     */
    close(e){
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(()=> {
            this.element.parentElement.removeChild(this.element);
        }, 500);
        document.removeEventListener('keyup', this.onKeyUp);
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

        //  EVENT
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        return dom;
    }
}