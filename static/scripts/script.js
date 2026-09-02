document.addEventListener("DOMContentLoaded", function() {
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


  // /order/#order: arriving from "Order through Isabella" preselects the order option.
  if (window.location.hash === '#order') {
    const format = document.getElementById('demo-format');
    if (format) { format.value = 'ready-to-order'; }
    const form = document.getElementById('order');
    if (form) { form.scrollIntoView({ block: 'start' }); }
  }

  // Formspree forms submit in-page so the visitor never lands on Formspree's own
  // "thank you" page. Without JavaScript the form posts normally, which still works.
  document.querySelectorAll('form[action^="https://formspree.io/"]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const button = form.querySelector('[type="submit"]');
      const isNewsletter = form.classList.contains('newsletter-form');
      let status = form.parentElement.querySelector('.form-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'form-status';
        status.setAttribute('role', 'status');
        form.insertAdjacentElement('afterend', status);
      }
      if (button) { button.disabled = true; button.dataset.label = button.textContent; button.textContent = 'Sending\u2026'; }
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(String(response.status));
        form.hidden = true;
        status.className = 'form-status';
        status.textContent = form.dataset.success || (isNewsletter
          ? 'Thank you, you are on the list.'
          : 'Thank you. Your message has reached Isabella and she will reply personally.');
        status.focus && status.setAttribute('tabindex', '-1');
        status.focus();
      } catch (error) {
        status.className = 'form-status form-status--error';
        status.textContent = 'That did not send. Please try again, or call 07391 585516.';
        if (button) { button.disabled = false; button.textContent = button.dataset.label; }
      }
    });
  });

});
