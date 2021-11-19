class ContactModal {
    constructor(photographer){
        this._photographer = photographer
    }
    createContactModal(){
        //INSERT CONTACT MODAL STRUCTURE BELOW
        let contactModal = `
            <div id="contact_modal">
                <div class="modal">
                    <header>
                        <h2>Contactez-moi</h2>
                        <p>${this._photogrpaher.name}<p>
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
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>
        `;
        return contactModal
    }
}