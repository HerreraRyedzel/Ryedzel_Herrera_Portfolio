// Dark / light mode toggle

const root = document.documentElement;
const button = document.getElementById('theme');

// Show the current year in the footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Restore the theme the visitor chose last time (if any)
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
} catch (e) {}

// Switch theme when the button is clicked
button.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const isDark = current
    ? current === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;

  const next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);

  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});


// ===== Mobile menu =====
const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
}

// Open or close the menu with the ☰ button
menuButton.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

// Close the menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});
