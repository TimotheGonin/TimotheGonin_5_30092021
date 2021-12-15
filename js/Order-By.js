class OrderBy{
    static init(){

        /**
        * @param {ARRAY of HTMLElements} array 
        * @param {DOM Container} destination 
        */ 
        function sortedToDOM(array, destination){
            array.forEach(arrayElement => {
                destination.appendChild(arrayElement);
            });
        }


        // ORDERBY BOX/BUTTON
        const orderByButton = document.querySelector('#orderBy'); 
        const gallery = document.querySelector('#media-cards-deck'); //media-cards collection container
        const galleryContent = Array.from(document.querySelectorAll('.picture-card')); //media-cards collection

        orderByButton.addEventListener('change', (e) => {
            //REMOVING gallery content
            gallery.innerHTML ='';
            
            switch (e.target.value) {
                case 'Popularité':
                    //SORT METHOD--number of likes
                    galleryContent.sort((a,b) => a.childNodes[3].lastElementChild.textContent - b.childNodes[3].lastElementChild.textContent);
                    //SORTED ARRAY TO THE DOM
                    sortedToDOM(galleryContent, gallery);
                    break;
            
                case 'Date':
                    //SORT METHOD--number of likes
                    galleryContent.sort((a,b) => b.childNodes[5].dateTime.localeCompare(a.childNodes[5].dateTime));
                    //SORTED ARRAY TO THE DOM
                    sortedToDOM(galleryContent, gallery);
                    break;
            
                case 'Titre':
                    //SORT METHOD--titles
                    galleryContent.sort((a,b) => a.childNodes[3].firstChild.nextSibling.textContent.localeCompare(b.childNodes[3].firstChild.nextSibling.textContent));
                    //SORTED ARRAY TO THE DOM
                    sortedToDOM(galleryContent, gallery);
                    break;
            
                default:
                    break;
            }
        });
    }
}