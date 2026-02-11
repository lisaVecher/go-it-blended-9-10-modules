const THEME_KEY = 'theme';

export function applyTheme(body, theme) {
  body.classList.remove('theme-dark', 'theme-light');

  if (theme === 'light') {
    body.classList.add('theme-light');
  } else {
    body.classList.add('theme-dark');
  }
}

export function initTheme(body) {
  let saved = localStorage.getItem(THEME_KEY);

  if (saved === null) {
    saved = 'dark';
    localStorage.setItem(THEME_KEY, saved);
  }

  applyTheme(body, saved);
}

export function toggleTheme(body) {
  const isDark = body.classList.contains('theme-dark');
  const nextTheme = isDark ? 'light' : 'dark';

  localStorage.setItem(THEME_KEY, nextTheme);

  applyTheme(body, nextTheme);
}
