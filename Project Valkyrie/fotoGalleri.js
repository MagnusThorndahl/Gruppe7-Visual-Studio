// Vi definerer vores globale variabler til vores API-kald: HTML-element, API-nøgle, kollektions-id og antal billeder //
let galleri = document.querySelector('.gallery-grid');
let API_NØGLE = 'qT0vXrdjtj1XR6qkq5DtIeruJL8o3GuGeinzROqNUlFCTR81tE4r425v';
let kollektionsId = 'kriwv7u';
let sideAntal = 25; 
let sidenummer = 1;

// Funktionen der henter fotos fra Pexels API'et og viser dem i HTML-galleriet //
async function loadFotos() {    
    let URL = `https://api.pexels.com/v1/collections/${kollektionsId}?type=photos&per_page=${sideAntal}&page=${sidenummer}`;  
    let svar = await fetch(URL, { headers: { Authorization: API_NØGLE } });
    let data = await svar.json();
    let photos = data.media.filter(item => item.type === 'Photo');

    galleri.innerHTML = ''; 

    // Vi looper igennem de filtrerede fotos og opretter et img-element for hvert billede //
    for (let Photo of photos) {
        let image = document.createElement('img');
        image.src = Photo.src.medium; //
        galleri.appendChild(image);  
    }
}
loadFotos();