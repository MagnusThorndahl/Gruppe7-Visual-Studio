// fotoGalleri.js
// Fetches images from a specific Pexels collection and displays them

let galleryGrid = document.querySelector('.gallery-grid');
let API_KEY = 'qT0vXrdjtj1XR6qkq5DtIeruJL8o3GuGeinzROqNUlFCTR81tE4r425v';   // keep private
let COLLECTION_ID = 'kriwv7u';         // your collection’s id
let PAGE = 1;
let PER_PAGE = 15;

async function loadPhotos(page = 1) {
  try {
    // ✅ Correct endpoint (no /items)
    let response = await fetch(
      `https://api.pexels.com/v1/collections/${COLLECTION_ID}?type=photos&per_page=${PER_PAGE}&page=${page}`,
      {
        headers: { Authorization: API_KEY }
      }
    );

    if (!response.ok) throw new Error(`Fejl ${response.status}`);

    let data = await response.json();
    galleryGrid.innerHTML = '';

    // data.media holds photos and possibly videos
    let photos = data.media.filter(item => item.type === 'Photo');

    photos.forEach(photo => {
      let img = document.createElement('img');
      img.src = photo.src.medium;
      img.alt = photo.alt || 'Pexels‑billede';
      img.loading = 'lazy';
      galleryGrid.appendChild(img);
    });

  } catch (error) {
    console.error('Kunne ikke indlæse billeder:', error);
    galleryGrid.innerHTML =
      '<p>Der opstod en fejl ved indlæsning af fotogalleriet.</p>';
  }
}

loadPhotos();