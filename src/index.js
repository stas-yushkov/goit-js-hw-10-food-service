import './sass/main.scss';
import template from './templates/template.hbs';
import menuData from './menu.json';

console.log('🚀 ~ menuData', menuData);

window.onload = () => {
  const menuRef = document.querySelector('.js-menu');
  console.log('🚀 ~ menuRef', menuRef);

  menuRef.innerHTML = template(menuData);
};
