class MediaFActory{
    constructor(data, type) {
        if (type === 'video'){
            return new MediaVideo(data)
        } else if (type === 'iamge'){
            return new MediaPicture(data)
        } else {
            throw 'Une erreur est survenue'
        }
    }
}