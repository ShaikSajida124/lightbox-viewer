const gallery = document.querySelector(".gallery");
const galleryItems = gallery.querySelectorAll(".gallery-item");

const lightBox = document.querySelector(".lightbox");
const lightBoxImage = lightBox.querySelector("#lightbox-image");
const closeBtn = lightBox.querySelector("#close-btn");

const imageLocations = ["https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg", "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg", "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg"];

closeBtn.addEventListener("click", ()=>{
  lightBox.classList.remove("toggle");
});

lightBox.addEventListener("click", () => {
  lightBox.classList.remove("toggle");
  console.log("Parent clicked");
});

function showImage(src) {
  lightBox.classList.add("toggle");
  lightBoxImage.src = src;
}

galleryItems.forEach((element, index) => {
 element.addEventListener("click", () => {
   showImage(imageLocations[index]);
 });
});



