// Create an array of images. 
// This array includes only the file paths, 
// i.e. what would go in the src="" attribute 
// of the <img> element in HTML.
var images = [
  "images/fsa_01.jpeg", 
  "images/fsa_02.jpeg", 
  "images/fsa_03.jpeg", 
  "images/fsa_04.jpeg", 
  "images/fsa_05.jpeg", 
  "images/fsa_06.jpeg", 
  "images/fsa_07.jpeg", 
  "images/fsa_08.jpeg", 
  "images/fsa_09.jpeg",
]

// store the length of the image array in a variable.
// the length of the image array is another way of saying
// "the total number of images"
var range = images.length;

// when you click on the window, run this code...
window.onclick = function() {

  // first, hide the instructions.
  document.getElementsByClassName("instructions")[0].style.display = "none";

  // then, pull out a random integer between 0
  // and the total number of images. Store that in 
  // a variable called random_index.
  var random_index = Math.floor(Math.random() * range);

  // use the random number to pull out one random image
  // from the array.
  var image_src = images[random_index];

  // Find the image in HTML.
  var image_element = document.getElementById("image");

  // Give the image element in HTML the randomly-selected 
  // filename as it's src. This will make the image display.
  image_element.src = image_src;

};