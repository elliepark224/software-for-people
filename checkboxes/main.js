// Declare some variables for each checkbox,
// just so that you don't have to repeat the 
// document.getElementbyId code over and over.
var red_filter = document.getElementById("red");
var green_filter = document.getElementById("green");
var blue_filter = document.getElementById("blue");

// Then declare a function for showing an element
function show(element) {
  element.style.display = 'inline-block';
}

// Then declare a function for hiding an element
function hide(element) {
  element.style.display = 'none';
}

// Here's the code that does the filtering.
// when the red checkbox is changed...
red_filter.onchange = function() {
  
  // if the box is checked, show all elements with a class of red.
  if (red_filter.checked) {
    document.querySelectorAll(".red").forEach(show);
  } 
  // otherwise, hide all elements with a class of red.
  else {
    document.querySelectorAll(".red").forEach(hide);
  }
}

// these next blocks of code do exactly the same thing
// according to the green and blue filters.
green_filter.onchange = function() {
  if (green_filter.checked) {
    document.querySelectorAll(".green").forEach(show);
  } else {
    document.querySelectorAll(".green").forEach(hide);
  }
}

blue_filter.onchange = function() {
  if (blue_filter.checked) {
    document.querySelectorAll(".blue").forEach(show);
  } else {
    document.querySelectorAll(".blue").forEach(hide);
  }
}