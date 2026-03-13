// ============================================
// Papel Pluma Boutique — Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Nav Background ---
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile Menu Toggle ---
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // --- Scroll Reveal ---
  const revealEls = document.querySelectorAll(
    '.section-header, .product-card, .highlight-text, .highlight-img, ' +
    '.about-img, .about-text, .visit-text, .visit-img, .newsletter-inner'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  // --- Smooth anchor scroll for Safari ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
