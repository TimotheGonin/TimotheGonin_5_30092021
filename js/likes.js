function liking(){

    //Show me the DOM
    const counterElement = this.querySelector('.picture-card__counter-like p');
    const counterValue = Number(this.querySelector('.picture-card__counter-like p').textContent);

    //Increment
    counterElement.textContent = `${counterValue + 1}`;

}


const likes = document.querySelectorAll('.picture-card__counter-like');
likes.forEach(like => like.addEventListener('click', liking));