class MediaFactory{
    constructor(data) {
        if (data.video){
            return new Video(data)
        } else if (data.image){
            return new Picture(data)
        } else {
            throw 'Une erreur est survenue'
        }
    }
}