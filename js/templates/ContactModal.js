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
                    <span class="modal--contact__close">
                        <i class="fas fa-times "></i>
                    </span>
                </header>
                <form class="modal--contact__body">
                    <div class="modal--contact__input-group">
                        <label>Prénom</label>
                        <input type="text"/>
                    </div>
                    <div class="modal--contact__input-group">
                        <label>Nom</label>
                        <input type="text"/>
                    </div>
                    <div class="modal--contact__input-group">
                        <label>Email</label>
                        <input typ="email"/>
                    </div>
                    <div class="modal--contact__input-group">
                        <label>Votre Message</label>
                        <textarea></textarea>
                    </div>
                    <button class="button button-contact button-contact--small">Envoyer</button>
                </form>
            </div>
        `;

        contactModal.innerHTML += contentModal;
        return contactModal;
    }
}