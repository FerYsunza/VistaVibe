//
// vistaVibe
//
// By Fer Ysunza, 01/02/24.
//
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Example images in the photos folder

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `photos/${image}`;
        imgElement.alt = 'Photo Gallery Image';
        gallery.appendChild(imgElement);
    });
});
