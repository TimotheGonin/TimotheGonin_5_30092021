class Ligthbox {

    static init (){
        const links = Array.from(document.querySelectorAll('a[href$=".mp4"], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]'));
        const gallery = links.map(link => link.getAttribute('href'))
        links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Ligthbox(e.currentTarget.getAttribute('href'), gallery);
            }))
    }

    /**
     * 
     * @param{string} url URL de l'image
     * @param{string[]} images Chemin des images de la lightbox
     */
    constructor(url, images){
        this.element = this.buildDOM(url);
        this.images = images;
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
        this.url = null;
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container');
        container.innerHTML = '';
        image.onload = () => {
            container.appendChild(image);
            this.url = url;
        };
        image.src = url;
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

    /**Previous Image
     * @param {MouseEvent/KeybordEvent} e 
     */
    prev(e){
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url);
        if(i === 0){
            i = this.images.length;
        }
        this.loadImage(this.images[i - 1]);
    }

    /**Next Image
     * @param {MouseEvent/KeybordEvent} e 
     */
    next(e){
        e.preventDefault();
        let i = this.images.findIndex(image => image === this.url);
        if(i === this.images.length - 1){
            i = -1;
        }
        this.loadImage(this.images[i + 1]);
    }

    /**
     * 
     * @param{string} url URL de l'image
     * @return{HTMLElement}
     */
    buildDOM(){
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
        </div>`;

        //  EVENT
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        return dom;
    }
}