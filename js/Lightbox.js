/**
 * @property {HTMLElement} element
 * @property {string[]} images Lightbox's image links
 * @property {string} url Active Image
 */
class Ligthbox {

    static init (){
        const links = Array.from(document.querySelectorAll('a[href$=".mp4"], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]'));
        const gallery = links.map(link => link.getAttribute('href'));

        //TEST
        const infos = Array.from(document.querySelectorAll('.picture-card__title'));
        const titles = infos.map(title => title.textContent);


        links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Ligthbox(e.currentTarget.getAttribute('href'), gallery, titles);
            }))
    }

    /**
     * 
     * @param{string} image's url
     * @param{string[]} Lightbox's image links
     */
    constructor(url, medias, titles){
        this.element = this.buildDOM(url);
        this.medias = medias;
        this.titles = titles;
        this.loadMedia(url);
        this.index = medias.indexOf(url);
        this.loadMediaInfo(titles[this.index]);
        this.onKeyUp = this.onKeyUp.bind(this);
        
        document.querySelector('header').setAttribute('aria-hidden','true');    
        document.querySelector('main').setAttribute('aria-hidden','true');
        document.body.appendChild(this.element);
        document.addEventListener('keyup', this.onKeyUp);
    }

    /**
     * 
     * @param{string} media's url
     */
    loadMedia(url){
        this.url = null;
        const mediaContainer = this.element.querySelector('.lightbox__body');
        mediaContainer.innerHTML = '';
        this.url = url;
        if (url.includes('jpg')) {
            const image = new Image();
			image.src = url;
            image.setAttribute('aria-label', 'Lilac breasted roller');
            mediaContainer.appendChild(image);

		} else if (url.includes('mp4')) {
            const video = document.createElement('video');
			video.src = url;
            video.setAttribute('aria-label', 'Lilac breasted roller');
            video.controls = true;
            mediaContainer.appendChild(video);
		}
    }

    loadMediaInfo(title){
        const infoContainer = this.element.querySelector('.lightbox__footer');
        infoContainer.innerHTML = '';
        const mediaInfo = document.createElement('h3');
        mediaInfo.classList.add('lightbox__title');
        mediaInfo.innerHTML = title;
        infoContainer.appendChild(mediaInfo);
    }

    // KEYBORD EVENT
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e){
        if(e.key === 'Escape'){
            this.close(e);
        } else if (e.key === 'ArrowLeft') {
            this.prev(e);
        } else if (e.key === 'ArrowRight') {
            this.next(e);
        }
    }

    /**
     * Close lightbox
     * @param {MouseEvent/KeyboardEvent} e 
     */
    close(e){
        e.preventDefault();
        document.querySelector('header').setAttribute('aria-hidden','false');    
        document.querySelector('main').setAttribute('aria-hidden','false');
        this.element.classList.add('fadeOut');
        window.setTimeout(()=> {
            this.element.parentElement.removeChild(this.element);
        }, 500);
        document.removeEventListener('keyup', this.onKeyUp);
    }

    /**Previous Media
     * @param {MouseEvent/KeybordEvent} e 
     */
    prev(e){
        e.preventDefault();
        let i = this.medias.findIndex(media => media === this.url);
        if(i === 0){
            i = this.medias.length;
        }
        this.loadMedia(this.medias[i - 1]);
        this.loadMediaInfo(this.titles[i - 1]);
    }

    /**Next Media
     * @param {MouseEvent/KeybordEvent} e 
     */
    next(e){
        e.preventDefault();
        let i = this.medias.findIndex(media => media === this.url);
        if(i === this.medias.length - 1){
            i = -1;
        }
        this.loadMedia(this.medias[i + 1]);
        this.loadMediaInfo(this.titles[i + 1]);
    }

    /**
     * @return{HTMLElement}
     */
    buildDOM(){
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.setAttribute('role','dialog');
        dom.setAttribute('aria-hidden', 'false');
        dom.style.display="flex";

        dom.innerHTML = `<button class="lightbox__close" aria-label="Close dialog"></button>
        <button class="lightbox__next" aria-label="Next image/video"></button>
        <button class="lightbox__prev" aria-label="Previous image/video"></button>
        <div class="lightbox__container">
            <div class="lightbox__body"></div>
            <div class="lightbox__footer"></div>
        </div>`;

        //  EVENT
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        return dom;
    }
}