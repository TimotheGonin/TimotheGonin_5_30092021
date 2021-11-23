class ContactModal {
    constructor(photographer){
        this._photographer = photographer
    }
    createContactModal(){
        //INSERT CONTACT MODAL STRUCTURE BELOW
        const contactModal = document.createElement('aside');
        contactModal.setAttribute('id', 'contact-modal');
        contactModal.setAttribute('class', 'modal')
        let contentModal = `
            <div class="modal--contact">
                <header class="modal--contact__header">
                    <div class="modal--contact__info">
                        <h2 class="modal--contact__title">Contactez-moi</h2>
                        <p class="modal--contact__recipient">${this._photographer.name}<p>
                    </div>
                    <span class="modal--contact__close" id="close-contact-momdal-button">
                        <i class="fas fa-times "></i>
                    </span>
                </header>
                <form class="modal--contact__body">
                    <div class="input-group">
                        <label class="input-group__label">Prénom</label>
                        <input type="text" class="input-group__input"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Nom</label>
                        <input type="text" class="input-group__input"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input type="email" class="input-group__input"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Votre Message</label>
                        <textarea class="input-group__input--textarea"></textarea>
                    </div>
                    <button class="button button-contact button-contact--small" id="contact-submit-button">Envoyer</button>
                </form>
            </div>
        `;

        contactModal.innerHTML += contentModal;
        return contactModal;
    }
}