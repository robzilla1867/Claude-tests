document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Buy / Rent search tabs
document.querySelectorAll('.search-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Search + contact forms (no backend yet)
document.getElementById('search-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Search coming soon — connect this to your property listings.');
});

document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We\'ll be in touch shortly.');
  e.target.reset();
});
