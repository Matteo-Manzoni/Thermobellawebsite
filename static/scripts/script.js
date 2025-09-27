
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
  }
  // Desktop "More" dropdown handling
  const navMore = document.querySelector('.nav-more');
  const navMoreToggle = navMore ? navMore.querySelector('.nav-more-toggle') : null;
  if (navMore && navMoreToggle) {
    const setOpen = (open) => {
      navMoreToggle.setAttribute('aria-expanded', String(open));
      navMore.classList.toggle('is-open', open);
    };

    setOpen(false);

    navMoreToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = navMoreToggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    document.addEventListener('click', (event) => {
      if (!navMore.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });

    navMore.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        setOpen(true);
      }
    });

    navMore.addEventListener('mouseleave', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        setOpen(false);
      }
    });

    navMore.addEventListener('focusin', () => {
      setOpen(true);
    });

    navMore.addEventListener('focusout', (event) => {
      if (!navMore.contains(event.relatedTarget)) {
        setOpen(false);
      }
    });
  }

});
