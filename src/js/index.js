import 'babel-polyfill';
import _ from 'lodash';

import './../sass/styles.scss';

const mobileMenu = document.getElementById('mobileNav');
const mobileToggle = document.querySelectorAll('.mobile-nav__button, .close-btn, .mobileMenu__link');
const pageContainer = document.querySelector('body');


// Mobile menu toggle
function toggleMenu() {
    for (let i = 0; i < mobileToggle.length; i++) {
        mobileToggle[i].addEventListener('click', function(e) {
            if (!mobileMenu.classList.contains('active')) {
                mobileMenu.classList.add('active');
            } else {
                mobileMenu.classList.remove('active');
            }

            if (!pageContainer.classList.contains('pos-fixed_mobile')) {
                pageContainer.classList.add('pos-fixed_mobile');
            } else {
                pageContainer.classList.remove('pos-fixed_mobile');
            }
        });
    }
}

toggleMenu();


