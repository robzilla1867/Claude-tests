// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Savings calculator
const perDay = document.getElementById('perDay');
const packPrice = document.getElementById('packPrice');
const perDayOut = document.getElementById('perDayOut');
const packPriceOut = document.getElementById('packPriceOut');
const perYearEl = document.getElementById('perYear');
const perFiveEl = document.getElementById('perFive');

function formatGBP(n) {
  return '£' + n.toLocaleString('en-GB', { maximumFractionDigits: 0 });
}

function updateCalc() {
  const cigsPerDay = Number(perDay.value);
  const pricePerPack = Number(packPrice.value);
  const pricePerCig = pricePerPack / 20;
  const yearly = cigsPerDay * pricePerCig * 365;

  perDayOut.textContent = cigsPerDay;
  packPriceOut.textContent = '£' + pricePerPack.toFixed(2);
  perYearEl.textContent = formatGBP(yearly);
  perFiveEl.textContent = formatGBP(yearly * 5);
}

if (perDay && packPrice) {
  perDay.addEventListener('input', updateCalc);
  packPrice.addEventListener('input', updateCalc);
  updateCalc();
}

// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 8px 24px -16px rgba(16,49,43,0.3)' : 'none';
});
