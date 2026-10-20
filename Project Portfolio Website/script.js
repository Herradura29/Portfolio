const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const navAnchors = navLinks ? navLinks.querySelectorAll('a') : [];
const revealItems = document.querySelectorAll('.reveal');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

navAnchors.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  });
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
