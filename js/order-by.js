// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS                                                                     │
// └──────────────────────────────────────────────────────────────────────────────┘

// ORDERBY BOX/BUTTON
const orderByButton = document.querySelector('#orderBy');
const gallery = document.querySelector('#media-cards-deck');
const galleryContent = document.querySelectorAll('.picture-card');
console.log(galleryContent);
galleryContent.forEach(elt => elt.style.opacity='0.4');

orderByButton.addEventListener('change',  (e) => {
    console.log(e.target.value);

    // if(e.target.value === 'Date'){
    //     gallery.style.flexDirection='row-reverse';
    // }
});