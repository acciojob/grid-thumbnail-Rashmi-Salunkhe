//your JS code here. If required.
const images = [
  {
    thumbnail: 'https://bikekharido.in/wp-content/uploads/2022/01/TVS-Jupiter-Classic-ET-Fi.png',
    fullsize: 'https://bikekharido.in/wp-content/uploads/2022/01/TVS-Jupiter-Classic-ET-Fi.png'
  },
  {
    thumbnail: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/46749/tvs-jupiter-front-three-quarter25.jpeg?q=75',
    fullsize: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/46749/tvs-jupiter-front-three-quarter25.jpeg?q=75'
  },
  {
    thumbnail: 'https://www.motorbeam.com/wp-content/uploads/TVS-Jupiter-Classic-Edition.jpg',
    fullsize: 'https://www.motorbeam.com/wp-content/uploads/TVS-Jupiter-Classic-Edition.jpg'
  }
];

// Function to create the image gallery
function createImageGallery() {
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'image-gallery';

  images.forEach((image, index) => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'thumbnail';
    thumbnailDiv.id = `thumbnail${index + 1}`;

    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = image.thumbnail;
    thumbnailImg.alt = `Thumbnail ${index + 1}`;

    thumbnailDiv.appendChild(thumbnailImg);
    thumbnailDiv.addEventListener('click', () => toggleImage(index));

    galleryContainer.appendChild(thumbnailDiv);
  });

  document.body.appendChild(galleryContainer);
}

// Function to toggle between thumbnail and fullsize image
function toggleImage(index) {
  const galleryContainer = document.querySelector('.image-gallery');
  const existingFullsize = document.getElementById('fullsize');

  if (existingFullsize) {
    galleryContainer.removeChild(existingFullsize);
    galleryContainer.querySelectorAll('.thumbnail').forEach(thumb => thumb.style.display = 'block');
  } else {
    const fullsizeImg = document.createElement('img');
    fullsizeImg.id = 'fullsize';
    fullsizeImg.src = images[index].fullsize;
    fullsizeImg.alt = `Fullsize ${index + 1}`;
    fullsizeImg.addEventListener('click', toggleImage);

    galleryContainer.querySelectorAll('.thumbnail').forEach(thumb => thumb.style.display = 'none');
    galleryContainer.appendChild(fullsizeImg);
  }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', createImageGallery);