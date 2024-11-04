const words = {
  "a": "Apple",
  "b": "Bread",
  "c": "Chocolate",
  "d": "Deviled eggs",
  "e": "Eggplant",
  "f": "Fruit",
  "g": "Grape",
  "h": "Hash browns",
  "i": "Ice Cream",
  "j": "Juice",
  "k": "Kimchi",
  "l": "Lemon",
  "m": "Mango",
  "n": "Nectarine",
  "o": "Orange",
  "p": "Pho",
  "q": "Quesadilla",
  "r": "Raspberry",
  "s": "Sweet Potato",
  "t": "Taco",
  "u": "Udon",
  "v": "Vanilla cake",
  "w": "Waffles",
  "x": "Xaxbys (pretend this works guys)",
  "y": "Yellow cake",
  "z": "Zha jiang mian "
};

document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key.toLowerCase();  // Ensure the key is in lowercase
  var keyDisplay = document.getElementById("key_display");

  // Only respond to alphabet keys (a-z)
  if (words[key]) {
    // Display the word associated with the key
    keyDisplay.innerHTML = words[key];

    // Generate random colors for background and font
    var randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var randomFontColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Change background and font color
    document.body.style.backgroundColor = randomBackgroundColor;
    keyDisplay.style.color = randomFontColor;

    // Animate the size increase
    keyDisplay.style.fontSize = "80px";
    setTimeout(() => {
      keyDisplay.style.fontSize = "48px";
    }, 150); // Reset size after 150ms
  } else {
    // If non-alphabet key is pressed, do nothing or clear display
    keyDisplay.innerHTML = "—";
  }
};