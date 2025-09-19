// Light Dark Mode Switcher
export function darkModeSwitcher() {
  const KEY = 'theme';
  const html = document.documentElement;
  const sw = document.getElementById('themeSwitch');
  const status = document.getElementById('themeStatus');
  const mql = window.matchMedia('(prefers-color-scheme: dark)'); // sprawdzam preferencje uzytkownika w przegladarce

  function applyTheme(theme, {persist = false} = {}) {
    const t = theme === 'dark' ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', t);
    // zsynchronizuj stan kontrolki i opis stanu
    if (sw) {
      sw.checked = t === 'dark';
      sw.setAttribute('aria-checked', String(sw.checked));
    }
    if (status) status.textContent = t === 'dark' ? 'Ciemny' : 'Jasny';
    if (persist) localStorage.setItem(KEY, t);
  }

  // Ustal motyw na starcie: localStorage > prefers-color-scheme > light
  const saved = localStorage.getItem(KEY);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    applyTheme(mql.matches ? 'dark' : 'light');
  }

  // Reakcja na klik
  if (sw) {
    sw.addEventListener('change', () => {
      applyTheme(sw.checked ? 'dark' : 'light', {persist: true});
    });
  }

  // Opcjonalnie: gdy użytkownik nie wybrał nic (brak KEY), reaguj na zmianę systemu
  mql.addEventListener('change', (e) => {
    if (!localStorage.getItem(KEY)) applyTheme(e.matches ? 'dark' : 'light');
  });

}

// Show Hide Sidebar Switcher
export function showHideSidebar() {
  // Sidebar elements
  const sidebar = document.querySelector('.sidebar');
  const sidebarColClass = [...sidebar.classList].find(cls => cls.startsWith('col'));
  const toggleBtn = document.querySelector('.sidebar-toggle');

  const sidebarElements = sidebar.querySelectorAll(':scope > *:not(.sidebar-top-bar)');

  // Content elements
  const contentContainer = document.querySelector('.content');
  const contentContainerColClass = [...contentContainer.classList].find(cls => cls.startsWith('col'));

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains(sidebarColClass)) {
      sidebar.classList.remove(sidebarColClass);
      sidebar.classList.add('collapsed');

      contentContainer.classList.remove(contentContainerColClass);
      contentContainer.classList.add('full');

      sidebarElements.forEach(el => {
        el.classList.add('invisible');
      });

    } else {
      sidebar.classList.add(sidebarColClass);
      sidebar.classList.remove('collapsed');

      contentContainer.classList.add(contentContainerColClass);
      contentContainer.classList.remove('full');

      sidebarElements.forEach(el => {
        setTimeout(() => {
          el.classList.remove('invisible');
        }, 100);
      });
    }
  });
}