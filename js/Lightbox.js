class Ligthbox {

    static init (){
        const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]')
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
        const element = this.buildDOM(url);
        document.body.appendChild(element);
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
            <img src="${url}" alt="">
        </div>`;
        return dom;
    }
}