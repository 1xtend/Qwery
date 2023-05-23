import { mainVars } from '../app.js';

export const headerFix = () => {
  const header = document.querySelector('.header');
  let headerHeight = header.clientHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('header-fix');
    } else if (window.scrollY <= headerHeight && !mainVars.body.classList.contains('body-lock')) {
      header.classList.remove('header-fix');
    }
  });
};