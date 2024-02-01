//
// vistaVibe
//
// By Fer Ysunza, 01/02/24.
//

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    // Update this list manually when adding new images
    const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Example placeholders

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `photos/${image}`;
        imgElement.alt = 'VistaVibe Gallery Image';
        gallery.appendChild(imgElement);
    });
});
