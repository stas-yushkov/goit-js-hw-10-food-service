import './sass/main.scss';
import template from './templates/template.hbs';
import menuData from './menu.json';

const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

window.onload = () => {
  const menuRef = document.querySelector('.js-menu');
  menuRef.innerHTML = template(menuData);

  const isThemeSet = localStorage.getItem('checkedThemeState');
  const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

  let checkedThemeState;

  if (!isThemeSet) {
    checkedThemeState = Theme.LIGHT;
    body.classList = checkedThemeState;
    themeSwitcherRef.checked = false;
  } else {
    checkedThemeState = isThemeSet;
    body.classList = checkedThemeState;

    if (checkedThemeState === Theme.LIGHT) {
      themeSwitcherRef.checked = false;
    } else {
      themeSwitcherRef.checked = true;
    }
  }

  themeSwitcherRef.addEventListener('change', e => {
    checkedThemeState = !e.target.checked ? 'light-theme' : 'dark-theme';
    body.classList = checkedThemeState;
    localStorage.setItem('checkedThemeState', checkedThemeState);
  });
};
