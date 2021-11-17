class VideoCard {
    constructor(media){
        this._media = media
    }
    createVideoCard(){
        const videoCard = `
            <article class="picture-card">
                <video class="picture-card__image" controls>
                    <source src="public/img/${photographer}/${this._media.video}" type="video/mp4">
                </video>
                <footer class="picture-card__info">
                    <h3 class="picture-card__title">${this._media.title}</h3>
                    <aside class="picture-card__counter-like">
                        <p>${this._media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </aside>
                </footer>
            </article>
        `;

        return videoCard
    }
}