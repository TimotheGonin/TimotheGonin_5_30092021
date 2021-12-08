function liking(){
    // const mediaCounter = this._element.querySelector('.picture-card__counter-like p').textContent;
    // const mediaCounterValue = Number(mediaCounter);
    // console.log(mediaCounterValue);
    const counterBox = document.querySelector('.picture-card__counter-like');
    const counter = document.querySelector('.picture-card__counter-like p');
    const newCounter = document.createElement('p');
    newCounter.innerText = `New Value Lauched`;
    counterBox.removeChild(counter);
    counterBox.appendChild(newCounter);
    console.log(counterBox);
}

document.querySelectorAll('.picture-card__counter-like').addEventListener('click' , liking);