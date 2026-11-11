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