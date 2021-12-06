class Picture{
    constructor(data){
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._tags = data.tags
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get id(){
        return this._id
    }
    get photographerId(){
        return this._photographerId
    }
    get title(){
        return  this._title
    }
    get source(){
        return `<figure class="picture-card__image">
                    <a href="public/img/${this._photographerId}/${this._image}">
                        <img src="public/img/${this._photographerId}/${this._image}" alt="">
                    </a>
                </figure>`
    }
    get tags(){
        return this._tags
    }
    get likes(){
        return this._likes
    }
    get date(){
        return this._date
    }
    get price(){
        return this._price
    }
}