function liking(){

    //Show me the DOM
    const counterBox = this.querySelector('.picture-card__counter-like');
    const counter = Number(this.querySelector('.picture-card__counter-like p').textContent);
    console.log(counter);

    //Increment
    let newCounter = document.createElement('p');
    newCounter.textContent = `${counter + 1}`;

    counterBox.removeChild(counter);
    
    // const counter = document.querySelector('.picture-card__counter-like p');
    // const newCounter = document.createElement('p');
    // newCounter.innerText = `New Value Lauched`;
    // counterBox.removeChild(counter);
    // counterBox.appendChild(newCounter);
    // console.log(counterBox);
}


const likes = document.querySelectorAll('.picture-card__counter-like');
likes.forEach(like => like.addEventListener('click', liking));