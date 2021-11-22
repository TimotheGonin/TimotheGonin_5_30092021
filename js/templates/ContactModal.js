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
                <header>
                    <h2>Contactez-moi</h2>
                    <p>${this._photographer.name}<p>
                    <span>
                        <i class="fas fa-times"></i>
                    </span>
                </header>
                <form>
                    <div>
                        <label>Prénom</label>
                        <input type="text"/>
                        <label>Nom</label>
                        <input type="text"/>
                        <label>Email</label>
                        <input typ="email"/>
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