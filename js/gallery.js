// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs > div > img");

  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      let newImgSrc = thumbnail.dataset.largeVersion;
      let newImgAlt = thumbnail.alt;
      mainImage.setAttribute("src", newImgSrc);
      mainImage.setAttribute("alt", newImgAlt);
    });
  });
}

// mainImage.setAttribute("src", newImageSrc);