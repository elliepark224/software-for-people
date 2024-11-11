const imageUpload = document.getElementById("imageUpload");
const uploadedImage = document.getElementById("uploadedImage");
const downloadButton = document.getElementById("downloadButton");

const sliders = {
  brightnessSlider: document.getElementById("brightnessSlider"),
  contrastSlider: document.getElementById("contrastSlider"),
  saturationSlider: document.getElementById("saturationSlider"),
  grayscaleSlider: document.getElementById("grayscaleSlider"),
  blurSlider: document.getElementById("blurSlider"),
  invertSlider: document.getElementById("invertSlider"),
  opacitySlider: document.getElementById("opacitySlider"),
};

// Handle Image Upload
imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      uploadedImage.src = event.target.result;
      uploadedImage.style.display = "block";
      downloadButton.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Apply filters based on slider values
function applyFilters() {
  const brightness = sliders.brightnessSlider.value;
  const contrast = sliders.contrastSlider.value;
  const saturation = sliders.saturationSlider.value;
  const grayscale = sliders.grayscaleSlider.value;
  const blur = sliders.blurSlider.value;
  const invert = sliders.invertSlider.value;
  const opacity = sliders.opacitySlider.value;

  // Apply filters to the image
  uploadedImage.style.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    saturate(${saturation}%)
    grayscale(${grayscale}%)
    blur(${blur}px)
    invert(${invert}%)
  `;

  // Apply opacity
  uploadedImage.style.opacity = opacity / 100;
}

sizeSlider.addEventListener("input", function() {
  const scale = sizeSlider.value;
  uploadedImage.style.width = `${scale}%`;
});

// Add event listeners to all sliders
Object.values(sliders).forEach((slider) => {
  slider.addEventListener("input", applyFilters);
});

// Download Edited Image
downloadButton.addEventListener("click", function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Set canvas size to match the uploaded image size
  canvas.width = uploadedImage.naturalWidth;
  canvas.height = uploadedImage.naturalHeight;

  // Apply the same filter and opacity settings to the canvas context
  context.filter = uploadedImage.style.filter;
  context.globalAlpha = uploadedImage.style.opacity;

  // Draw the image on the canvas
  context.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);

  // Create a downloadable link
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/jpeg");
  link.download = "edited_image.jpg";
  link.click();
});
