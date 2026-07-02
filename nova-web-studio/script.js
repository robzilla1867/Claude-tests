// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navMobile.classList.toggle('open');
});
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navMobile.classList.remove('open');
  });
});

// Cursor glow follows mouse
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Reveal-on-scroll via IntersectionObserver
const revealTargets = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => observer.observe(el));

// Animated stat counters
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statNumbers.forEach(el => statObserver.observe(el));

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Fake contact form submit
const ctaForm = document.getElementById('ctaForm');
const formNote = document.getElementById('formNote');
ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks! We'll be in touch within 24 hours. ✨";
  ctaForm.reset();
});
