// vi definerer her som det første variablerne vi bruger i vores query til Pexels API'et blandt andet api nøgle, id på kollektion osv. //
let galleri = document.querySelector('.gallery-grid');
let API_NØGLE = 'qT0vXrdjtj1XR6qkq5DtIeruJL8o3GuGeinzROqNUlFCTR81tE4r425v';
let kollektionsId ='kriwv7u';
let sideAntal = 15; 

// funktionen der henter fotos fra Pexels API'et og viser dem i galleriet i vores html fotogalleri.html //
     async function loadFotos(sidenummer = 1) {    
let URL = `https://api.pexels.com/v1/collections/${kollektionsId}?type=photos&per_page=${sideAntal}&page=${sidenummer}`;  
let svar = await fetch(URL, { headers: { Authorization: API_NØGLE } });
let data = await svar.json();
let photos = data.media.filter(item => item.type === 'Photo');

    galleri.innerHTML = ''; 

    // Looper igennem de fotos vi modtager igennem API'et og opretter et img element for hvert foto //
    for (let Photo of photos) {
      let image = document.createElement('img')
      image.src = Photo.src.medium;
      galleri.appendChild(image);
    }

  }

loadFotos();