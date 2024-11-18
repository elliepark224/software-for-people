// Function to get query parameters from the URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if there's input in the URL and display it
document.addEventListener("DOMContentLoaded", () => {
    const outputDisplay = document.getElementById("outputDisplay");
    const displayText = document.getElementById("displayText");
    const formContainer = document.getElementById("formContainer");
    const linkBox = document.getElementById("linkBox");
    const userInput = getQueryParameter("input");

    // If URL has input parameter, display only the input content
    if (userInput) {
        displayText.textContent = decodeURIComponent(userInput);
        outputDisplay.style.display = "block";
        formContainer.style.display = "none"; // Hide the form
        linkBox.style.display = "none";       // Hide the link box
    }
});

// Handle form submission
document.getElementById("inputForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("userInput").value;

    // Update the display section with input
    const displayText = document.getElementById("displayText");
    displayText.textContent = input;

    // Make the output section and link box visible, hide the form
    const outputDisplay = document.getElementById("outputDisplay");
    outputDisplay.style.display = "block";
    const formContainer = document.getElementById("formContainer");
    formContainer.style.display = "none";
    const linkBox = document.getElementById("linkBox");
    linkBox.style.display = "block";

    // Generate shareable link with query parameter
    const encodedInput = encodeURIComponent(input);
    const shareableLink = `${window.location.origin}${window.location.pathname}?input=${encodedInput}`;
    document.getElementById("shareLink").value = shareableLink;

    // Update the URL without reloading
    window.history.pushState({}, '', shareableLink);
});