function liking(){

    //PICTURE-CARD'S LIKES
    const counterElement = this.querySelector('.picture-card__counter-like p');
    const counterValue = Number(counterElement.textContent);

    // PHOTOGRAPHER'S-COUNTER LIKES
    const totalLikesElement = document.querySelector('.photographer-counter__likes p');
    const totalLikesValue = Number(totalLikesElement.textContent);

    
    increment(counterElement, counterValue);
    increment(totalLikesElement, totalLikesValue);
}

function increment(element, value){
    //Increment
    element.textContent = `${++value}`;
}


const likes = document.querySelectorAll('.picture-card__counter-like');
likes.forEach(like => like.addEventListener('click', liking));