
function navigateToDemos() {
  window.location.href = "templates/demos.html"; // Adjust the path as needed
}

function navigateToBuy() {
  window.location.href = "templates/buy.html"; // Adjust the path as needed
}

function navigateToBuyTH() {
  window.location.href = "buy.html"; // Adjust the path as needed
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's URL
    const currentPageURL = window.location.pathname;

    // Find all content links
    const contentLinks = document.querySelectorAll(".contents a");

    // Loop through the content links to check if they match the current page's URL
    contentLinks.forEach(link => {
      if (link.getAttribute("href") === currentPageURL) {
        link.classList.add("active"); // Add the "active" class to the current page's link
      }
    });
  });










