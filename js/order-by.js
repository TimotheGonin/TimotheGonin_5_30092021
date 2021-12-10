// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS                                                                     │
// └──────────────────────────────────────────────────────────────────────────────┘

// ORDERBY BOX/BUTTON
const orderByButton = document.querySelector('#orderBy'); 
const gallery = document.querySelector('#media-cards-deck'); //media-cards collection container
const galleryContent = document.querySelectorAll('.picture-card'); //media-cards collection
console.log(galleryContent);

orderByButton.addEventListener('change',  (e) => {
    console.log(e.target.value);
    gallery.innerHTML ='';
    
    console.log(galleryContent);
    if(e.target.value === 'Popularité'){
        galleryContent.forEach(elt => {
            elt.style.background='red';
            gallery.appendChild(elt);
        });
    } else if(e.target.value === 'Date'){
        galleryContent.forEach(elt => {
            elt.style.background='orange';
            gallery.appendChild(elt);
        });
    } else if(e.target.value === 'Titre'){
        galleryContent.forEach(elt => {
            elt.style.background='green';
            gallery.appendChild(elt);
        });
    }
});