//
// vistaVibe
//
// By Fer Ysunza, 01/02/24.
//

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('gallery');
    const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Update this array based on the photos in your directory

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `photos/${image}`;
        imgElement.alt = 'VistaVibe Gallery Image';
        gallery.appendChild(imgElement);
    });

    const toggleButton = document.getElementById('toggleDarkMode');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});
