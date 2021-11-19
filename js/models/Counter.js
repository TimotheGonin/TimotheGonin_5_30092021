class Counter{
    constructor(photographer, media){
        this._idPhotographer = photographer.id
        this._photographerPrice = photographer.price
        this._photographerId = media.photographerId
        this._likes = media.likes
    }
    get idPhotographer(){
        return this._idPhotographer
    }
    get photographerId(){
        return this._photographerId
    }
    get likes(){
        return this._likes
    }
}