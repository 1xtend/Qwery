import { mainVars } from '../app.js';

export const headerFix = () => {
  const header = document.querySelector('.header');
  // let headerHeight = header.clientHeight;
  let srollHeight = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > srollHeight) {
      header.classList.add('header-fix');
    } else if (window.scrollY <= srollHeight && !mainVars.body.classList.contains('body-lock')) {
      header.classList.remove('header-fix');
    }
  });
};
