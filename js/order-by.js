// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ELEMENTS                                                                     │
// └──────────────────────────────────────────────────────────────────────────────┘

// ORDERBY BOX/BUTTON
const orderByButton = document.querySelector('#orderBy'); 
const gallery = document.querySelector('#media-cards-deck'); //media-cards collection container
const galleryContent = document.querySelectorAll('.picture-card'); //media-cards collection
console.log(galleryContent);

orderByButton.addEventListener('change', (e) => {
    console.log(e.target.value);
    gallery.innerHTML ='';
    
    console.log(galleryContent);
    if(e.target.value === 'Popularité'){
        galleryContent.forEach(elt => {
            elt.style.background='red';
            //CATCH LIKES
            const like = Number(elt.childNodes[3].lastElementChild.textContent)
            console.log(like);

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
            //CATCH TITLE
            const title = elt.childNodes[3].firstChild.nextSibling.textContent
            console.log(title);
            gallery.appendChild(elt);
        });
    }
});


//IF POSSIBLE 
// orderByButton.addEventListener('click', (e) => console.log(e.target.value));