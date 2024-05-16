import { getHome } from './home.js';
import { getMenu } from './menu.js';
import { getContact } from './contact.js';

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', () => {
    const divContent = document.querySelector('#content');

    if (divContent) {
        divContent.textContent = '';
    }

    const { h2, img, p } = getHome();
    
    divContent.appendChild(h2);
    divContent.appendChild(img);
    divContent.appendChild(p);
})
 
menuBtn.addEventListener('click', () => {
    const divContent = document.querySelector('#content');

    if (divContent) {
        divContent.textContent = '';
    }

    const { h2, p } = getMenu();
    
    divContent.appendChild(h2);
    divContent.appendChild(p);
})
 
contactBtn.addEventListener('click', () => {
    const divContent = document.querySelector('#content');

    if (divContent) {
        divContent.textContent = '';
    }

    const { h2, p } = getContact();
    
    divContent.appendChild(h2);
    divContent.appendChild(p);
})
 