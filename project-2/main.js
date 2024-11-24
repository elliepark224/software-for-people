const api = "https://script.google.com/macros/s/AKfycbwVvLuZJMxXXoJY4565wNLzpbH39x7imG9FhNzTX1X83nE3tuIaTQnkF3v23aWC2VkC/exec"

  
        // Function to post form data to google sheet
        function handlePostData(data) {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            fetch(api, {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                }).catch(error => {
                    console.error('Error:', error);
                });

        }
           

              // Function to get query parameters from the URL
        function getQueryParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
      
        

        // Check if there's input in the URL and display it
        document.addEventListener("DOMContentLoaded", async () => {
            const outputDisplay = document.getElementById("outputDisplay");
            const displayText = document.getElementById("displayText");
            const formContainer = document.getElementById("formContainer");
            const linkBox = document.getElementById("linkBox");
            const staticText = document.getElementById("staticText");
            const userInput = getQueryParameter("input");




            // If URL has input parameter, display only the input content
            if (userInput) {
                displayText.textContent = decodeURIComponent(userInput);
                outputDisplay.style.display = "block";
                formContainer.style.display = "none"; // Hide the form
                linkBox.style.display = "none";       // Hide the link box
                staticText.style.display = "block";  // Show the static text
            }
        });

        // Handle form submission
        document.getElementById("inputForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const input = document.getElementById("userInput").value;
            const inputImage = document.getElementById("userImage").value;

            // If input is empty, do nothing
            if (!input || !inputImage)      return;

            // Post the input data to the server
            handlePostData({ headline: input, "image-link": inputImage });

            // Update the display section with input
            const displayText = document.getElementById("displayText");
            displayText.textContent = input;
            const metaTitle = document.querySelector('meta[property="og:title"]');
            metaTitle?.setAttribute ('content', input)
            const metaImage = document.querySelector('meta[property="og:image"]');
            metaImage?.setAttribute ('content', inputImage)

            // Make the output section and link box visible, hide the form
            const outputDisplay = document.getElementById("outputDisplay");
            outputDisplay.style.display = "block";
            const formContainer = document.getElementById("formContainer");
            formContainer.style.display = "none";
            const linkBox = document.getElementById("linkBox");
            linkBox.style.display = "block";

            // Generate shareable link with query parameter
            const encodedInput = encodeURIComponent(input);
            const shareableLink = `https://ellie-dailies.glitch.me/${encodedInput}`;
            document.getElementById("shareLink").value = shareableLink;

            // Update the URL without reloading
            window.history.pushState({}, '', shareableLink);
        });