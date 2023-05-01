//select filters
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");
//select buttoms
let upload = document.getElementById("upload");
let reset = document.querySelector("span");
//select img
let img = document.getElementById("img");
let imgBox = document.querySelector(".imgBox");
// reset filters value 
function resetValue(){
  img.style.filter = "none"
  saturate.value = "100"
  contrast.value = "100"
  brightness.value = "100"
  sepia.value = "0"
  grayscale.value = "0" 
  hue_rotate.value = "0"
}
//onload function to hide the buttons when we refresh the page
window.onload = function () {

  reset.style.display = "none";
  imgBox.style.display = "none";
};
//onchange function to reshow our button
upload.onchange = function () {
  resetValue();
 
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
};
//activate filters
let filters = document.querySelectorAll("ul li input");
//looping on filters to work with eachonther
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hue_rotate.value}deg)
    `;
  });
});

