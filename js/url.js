//CREATE URL OBJECT
let url = new URL(window.location.href);
console.log(url);

//GET URL PARAMETERS
let id = url.searchParams.get('id');
console.log(id);