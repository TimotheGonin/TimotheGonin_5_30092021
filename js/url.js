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

        //LOOP ID
        for ( kind of data.photographers){
            photographerInfo.push(kind.name);
            photographerInfo.push(kind.city);
            photographerInfo.push(kind.country);
            photographerInfo.push(kind.tags);
            photographerInfo.push(kind.tagline);
            photographerInfo.push(kind.price);
            photographerInfo.push(kind.portrait);
            console.log(photographerInfo);

            if(kind.id == id){
                console.log(`${kind.id} : ID from .JSON == ${id} Id in URL`);
                return;
            } else {
                //remove array
                photographerInfo = [];
            }
        }
    })
