class Likes{
    static init(){
        function liking(){

            //PICTURE-CARD'S LIKES
            // const counterElement = this.querySelector('.picture-card__counter-like-value');
            const counterElement = this.previousElementSibling;
            const counterValue = Number(counterElement.innerText);
        
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
        
        
        const likes = document.querySelectorAll('.picture-card__counter-like-action');
        likes.forEach(like => like.addEventListener('click', liking));
    }
}
