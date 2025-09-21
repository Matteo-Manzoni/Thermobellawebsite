
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
  // Highlight legacy sidebar links when present
  const currentPageURL = window.location.pathname;
  const contentLinks = document.querySelectorAll(".contents a");
  contentLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPageURL) {
      link.classList.add("active");
    }
  });

  // Mobile navigation toggle for new header
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-navigation');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isVisible = primaryNav.getAttribute('data-visible') === 'true';
      primaryNav.setAttribute('data-visible', String(!isVisible));
      navToggle.setAttribute('aria-expanded', String(!isVisible));
    });

    const navLinks = primaryNav.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Desktop "More" dropdown handling
  const navMore = document.querySelector('.nav-more');
  const navMoreToggle = navMore ? navMore.querySelector('.nav-more-toggle') : null;
  if (navMore && navMoreToggle) {
    navMore.dataset.open = 'false';
    navMoreToggle.setAttribute('aria-expanded', 'false');

    const closeDropdown = () => {
      navMore.dataset.open = 'false';
      navMoreToggle.setAttribute('aria-expanded', 'false');
    };

    navMoreToggle.addEventListener('click', (event) => {
      const isOpen = navMore.dataset.open === 'true';
      navMore.dataset.open = String(!isOpen);
      navMoreToggle.setAttribute('aria-expanded', String(!isOpen));
      event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
      if (!navMore.contains(event.target)) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    });

    navMoreToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
        navMoreToggle.blur();
      }
    });
  }

});

