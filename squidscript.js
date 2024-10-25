// Get the modal element
var modal = document.getElementById("ArtModal");
var body = document.querySelector("body");

// Get the image container and the image element within it
var modalCard = document.querySelector(".ModalCard");
var modalImage = document.querySelector(".ModalImg");
var modalSubtitle = document.querySelector(".ModalSub");
var modalClose = document.querySelector(".ModalClose");

// Get all the thumbnail images
var thumbnailImages = document.querySelectorAll(".GalleryCardImage");

// Attach a click event listener to each thumbnail image
thumbnailImages.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    var imageSrc = this.getAttribute("src"); // Get the source of the clicked thumbnail
    modalImage.setAttribute("src", imageSrc); // Set the source of the modal image

    modalSubtitle.innerHTML = this.getAttribute("alt");  
    modal.style.display = "flex"; // Display the modal
    body.style.overflow = "hidden";
  });
});

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