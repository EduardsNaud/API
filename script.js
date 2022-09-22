async function iegutDarglietasNoApi() {//darbība nenotiks viena aiz otras, var notikt citā laikā
    let datiNoApi = await fetch("https://fakestoreapi.com/products/category/jewlery")//dati būs jāgaida
    let datiJson = datiNoApi.json;//datu iegūšana
    console.log(datiJson);
}

async function iegutDarglietasNoApi() {//darbība nenotiks viena aiz otras, var notikt citā laikā
    let datiNoApi = await fetch("https://fakestoreapi.com/products/category/electronics")//dati būs jāgaida
    let datiJson = datiNoApi.json;//datu iegūšana
    console.log(datiJson);
}