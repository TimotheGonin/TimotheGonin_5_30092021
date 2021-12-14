// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS                                                                     │
// └──────────────────────────────────────────────────────────────────────────────┘

// ORDERBY BOX/BUTTON
const orderByButton = document.querySelector('#orderBy'); 
const gallery = document.querySelector('#media-cards-deck'); //media-cards collection container
const galleryContent = Array.from(document.querySelectorAll('.picture-card')); //media-cards collection
console.log(galleryContent);

orderByButton.addEventListener('change', (e) => {
    //REMOVING gallery content
    gallery.innerHTML ='';

    if(e.target.value === 'Popularité'){
        //SORT METHOD--number of likes
        galleryContent.sort((a,b) => a.childNodes[3].lastElementChild.textContent - b.childNodes[3].lastElementChild.textContent);

        //SORTED ARRAY TO THE DOM
        galleryContent.forEach(elt => {
            gallery.appendChild(elt);
        });

    } else if(e.target.value === 'Date'){
        //SORT METHOD--number of likes
        galleryContent.sort((a,b) => a.childNodes[5].dateTime.localeCompare(b.childNodes[5].dateTime));

        //SORTED ARRAY TO THE DOM
        galleryContent.forEach(elt => {
            elt.style.background='orange';
            console.log(elt.childNodes[5].dateTime);
            gallery.appendChild(elt);
        });

    } else if(e.target.value === 'Titre'){

        //SORT METHOD--titles
        galleryContent.sort((a,b) => a.childNodes[3].firstChild.nextSibling.textContent.localeCompare(b.childNodes[3].firstChild.nextSibling.textContent));

        //SORTED ARRAY TO THE DOM
        galleryContent.forEach(elt => {
            gallery.appendChild(elt);
        });
    }
});


//IF POSSIBLE 
// orderByButton.addEventListener('click', (e) => console.log(e.target.value));

function order(array, arrayProperty){
    array.sort((a,b) => a.arrayProperty - b.arrayProperty)
}