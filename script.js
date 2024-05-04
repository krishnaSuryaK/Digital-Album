// JavaScript
const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg","image6.jpg","image7.jpg","image8.jpg"]; // Add image paths here
let currentIndex = 0;

function displayImage(index) {
    document.getElementById("current-image").src = images[index];
}

function updateFilmStrip() {
    const filmStrip = document.querySelector(".film-strip");
    filmStrip.innerHTML = "";
    images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.onclick = () => {
            displayImage(index);
            currentIndex = index;
        };
        filmStrip.appendChild(img);
    });
}

function firstImage() {
    currentIndex = 0;
    displayImage(currentIndex);
}

function lastImage() {
    currentIndex = images.length - 1;
    displayImage(currentIndex);
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    displayImage(currentIndex);
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
    displayImage(currentIndex);
}

function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    updateFilmStrip();
}

// Initial setup
displayImage(currentIndex);
updateFilmStrip();
