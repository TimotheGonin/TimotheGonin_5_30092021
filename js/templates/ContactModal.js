/**
 * @param{string} photographer data
 */
class ContactModal {
    constructor(photographer){
        this._photographer = photographer
    }
    createContactModal(){
        //INSERT CONTACT MODAL STRUCTURE BELOW
        const contactModal = document.createElement('aside');
        contactModal.setAttribute('id', 'contact-modal');
        contactModal.classList.add('contact-form');
        contactModal.classList.add('sr-only');
        let contentModal = `
            <div class="contact-form__container">
                <header class="contact-form__header">
                    <div class="contact-form__info">
                        <h2 class="contact-form__title">Contactez-moi</h2>
                        <p class="contact-form__recipient">${this._photographer.name}<p>
                    </div>
                    <span class="contact-form__close" id="close-contact-momdal-button" aria-label="Close Contact form">
                        <i class="fas fa-times "></i>
                    </span>
                </header>
                <form class="contact-form__body">
                    <div class="input-group">
                        <label class="input-group__label" az>Prénom</label>
                        <input type="text" class="input-group__input" aria-labelledby="First name"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Nom</label>
                        <input type="text" class="input-group__input" aria-labelledby="Last name"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input type="email" class="input-group__input" aria-labelledby="Email"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Votre Message</label>
                        <textarea class="input-group__input--textarea" aria-labelledby="Your message"></textarea>
                    </div>
                    <button type="submit"class="button button-contact button-contact--small" id="contact-submit-button" aria-label="Send">Envoyer</button>
                </form>
            </div>
        `;

        contactModal.innerHTML += contentModal;
        return contactModal;
    }
}