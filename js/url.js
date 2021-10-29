//CREATE URL OBJECT
let pageUrl = new URL(window.location.href);
console.log(pageUrl);

//GET URL PARAMETERS
const id = pageUrl.searchParams.get("id");
console.log(id);


//FETCH FROM JSON
fetch("data/fisheye_data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.photographers);

        //LOOP ID
        for ( kind of data.photographers){
            console.log(kind.id);

            if(kind.id == id){
                console.log(`${kind.id} : ID from .JSON == ${id} Id in URL`);
                return;
            }
        }
    })
