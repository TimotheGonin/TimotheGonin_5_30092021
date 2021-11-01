//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);
console.log(pageUrl);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");
console.log(id);

//KEEP INFO CORRESPONDING ID
let photographerInfo = [];


//FETCH FROM JSON
fetch("data/fisheye_data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.photographers);

        //LOOP ID + STOCK DATA(photographer corresponding to ID in URL)
        for ( photographer of data.photographers){
            photographerInfo.push(photographer.name);
            photographerInfo.push(photographer.city);
            photographerInfo.push(photographer.country);
            photographerInfo.push(photographer.tags);
            photographerInfo.push(photographer.tagline);
            photographerInfo.push(photographer.price);
            photographerInfo.push(photographer.portrait);
            console.log(photographerInfo);

            if(photographer.id == id){
                console.log(`${photographer.id} : ID from .JSON == ${id} Id in URL`);
                return;
            } else {
                //remove array
                photographerInfo = [];
            }
        }
    })
