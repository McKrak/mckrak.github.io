
fetch("dat/portfolioDat.json")
  .then(res => res.json())
  .then(json => {
    for (var gallerySection in json) {

      for (const galleryCard of json[gallerySection]) {
        galleryCard.parent = gallerySection;

        //Create gallery card
        var galleryCardDiv = document.createElement("div");
        galleryCardDiv.setAttribute("class", "GalleryCard");
  
        //Create gallery card image
        var galleryCardImage = document.createElement("img");
        galleryCardImage.setAttribute("class", "GalleryCardImage");
        if (galleryCard.src_thumb != undefined) {
          galleryCardImage.setAttribute("src", `res/gallery/${gallerySection}/${galleryCard.src_thumb}`);
        } else {
          galleryCardImage.setAttribute("src", `res/gallery/${gallerySection}/${galleryCard.src}`);
        }
        galleryCardImage.setAttribute("alt", `${galleryCard.desc} (${gallerySection})`);
        
        //Function for click-on
        galleryCardImage.addEventListener("click", function () {
          // Set modal image source to full res image.
          modalImage.setAttribute("src", `res/gallery/${galleryCard.parent}/${galleryCard.src}`); 
          if (galleryCard.pixelate == true) {
            modalImage.style.imageRendering = "pixelated";
          } else {
            modalImage.style.imageRendering = "initial";
          }
      
          modalTitle.innerHTML = galleryCard.name;
          modalSubtitle.innerHTML = galleryCard.desc;  
          modal.style.display = "grid"; // Display the modal
        });
  
        galleryCardDiv.appendChild(galleryCardImage);
  
        //Append the card to the gallery.
        document.getElementById(`Gallery${gallerySection}`).appendChild(galleryCardDiv);
      }
    }
  });

// Get the modal element
var modal = document.getElementById("ArtModal");
var body = document.querySelector("body");

// Get the image container and the image element within it
var modalCard = document.querySelector(".ModalCard");
var modalImage = document.querySelector(".ModalImg");
var modalTitle = document.querySelector(".ModalTitle");
var modalSubtitle = document.querySelector(".ModalSub");
var modalClose = document.querySelector(".ModalClose");

// Close the modal when the close button or outside the modal content is clicked
modal.addEventListener("click", function (event) {
  if (
    event.target === modalClose ||
    event.target === modal
  ) {
    modal.style.display = "none"; // Hide the modal
    body.style.overflow = "initial";
  }
});

modal.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
  body.style.overflow = "initial";
});