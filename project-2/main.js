function generatePrank() {
  const name = document.getElementById('name').value.trim();
  const headline = document.getElementById('headline').value.trim();

  if (!name || !headline) {
      alert("Please fill out both fields!");
      return;
  }

  // Generate the fake news link with URL parameters
  const baseURL = window.location.href.split('?')[0];
  const prankLink = `${baseURL}?name=${encodeURIComponent(name)}&headline=${encodeURIComponent(headline)}`;

  // Display the generated link
  const prankLinkInput = document.getElementById('prankLink');
  prankLinkInput.value = prankLink;
  document.getElementById('result').style.display = 'block';
}

function copyLink() {
  const link = document.getElementById('prankLink').value;

  // Use the Clipboard API if available, fallback to execCommand if necessary
  if (navigator.clipboard) {
      navigator.clipboard.writeText(link)
          .then(() => alert("Link copied to clipboard!"))
          .catch(err => alert("Failed to copy link: " + err));
  } else {
      // Fallback for older browsers
      const linkInput = document.getElementById('prankLink');
      linkInput.select();
      linkInput.setSelectionRange(0, 99999); // For mobile devices

      try {
          document.execCommand("copy");
          alert("Link copied to clipboard!");
      } catch (err) {
          alert("Failed to copy link: " + err);
      }
  }
}

// Display the prank news article if the URL has query parameters
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const headline = urlParams.get('headline');

  if (name && headline) {
      document.body.innerHTML = `
          <div class="container">
              <h1>BREAKING NEWS</h1>
              <h2>${headline}</h2>
              <p>${name} was involved in an incredible event today. Sources report: "${headline}". More updates to follow.</p>
          </div>
      `;
  }
};