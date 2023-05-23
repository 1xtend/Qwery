// Import body and html.
import { bodyLock, bodyUnLock } from './bodyLock.js';

/*

EXAMPLE

<button type="button" class="burger">
  <span></span>
</button>

*/

// Burger.
export const burger = () => {
  const burger = document.querySelector('.burger');

  if (burger) {
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', (e) => {
      if (!burger.classList.contains('is-active')) {
        addClasses();
        bodyLock();
      } else {
        removeClasses();
        bodyUnLock();
      }
    });

    function addClasses() {
      burger.classList.add('is-active');
      navbar.classList.add('is-active');
      navbar.addEventListener('click', handleNavbarClick);
    }

    function removeClasses() {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
      navbar.removeEventListener('click', handleNavbarClick);
    }

    function handleNavbarClick(e) {
      if (e.target.closest('.navbar__link')) {
        if (!e.target.closest('[data-open-modal]')) {
          bodyUnLock();
        }

        removeClasses();
      }
    }
  }
};
