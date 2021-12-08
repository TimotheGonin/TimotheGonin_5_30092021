function liking(){

    //Show me the DOM
    const counterElement = this.querySelector('.picture-card__counter-like p');
    const counterValue = Number(this.querySelector('.picture-card__counter-like p').textContent);

    //Increment
    counterElement.textContent = `${counterValue + 1}`;
    
    counterUpdate();
}

function counterUpdate(){
    const totalLikesElement = document.querySelector('.photographer-counter__likes p');
    const totalLikesValue = Number(document.querySelector('.photographer-counter__likes p').textContent);

    //Increment
    totalLikesElement.textContent = `${totalLikesValue + 1}`;
}


const likes = document.querySelectorAll('.picture-card__counter-like');
likes.forEach(like => like.addEventListener('click', liking));