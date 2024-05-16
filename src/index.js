import './style.css';
import { getHome } from './home.js';
import { getMenu } from './menu.js';
import { getContact } from './contact.js';

const divContent = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');

const contactBtn = document.querySelector('#contact');
const { h2, img, p } = getHome();

divContent.appendChild(h2);
divContent.appendChild(img);
divContent.appendChild(p);

homeBtn.classList.add('active');

homeBtn.addEventListener('click', () => {
    const menuActive = menuBtn.classList.contains('active');
    const contactActive = contactBtn.classList.contains('active');
    const divContent = document.querySelector('#content');
    
    if (divContent) {
        divContent.textContent = '';
    }
    
    if (menuActive) {
        menuBtn.classList.remove('active');
    }
    
    if (contactActive) {
        contactBtn.classList.remove('active');
    }
    
    const { h2, img, p } = getHome();
    
    divContent.appendChild(h2);
    divContent.appendChild(img);
    divContent.appendChild(p);
    
    homeBtn.classList.add('active');
})

menuBtn.addEventListener('click', () => {
    const homeActive = homeBtn.classList.contains('active');
    const contactActive = contactBtn.classList.contains('active');
    const divContent = document.querySelector('#content');
    
    if (divContent) {
        divContent.textContent = '';
    }
    
    if (homeActive) {
        homeBtn.classList.remove('active');
    }
    
    if (contactActive) {
        contactBtn.classList.remove('active');
    }

    const { h2, p } = getMenu();
    
    divContent.appendChild(h2);
    divContent.appendChild(p);

    menuBtn.classList.add('active');
})
 
contactBtn.addEventListener('click', () => {
    const homeActive = homeBtn.classList.contains('active');
    const menuActive = menuBtn.classList.contains('active');
    const divContent = document.querySelector('#content');

    if (divContent) {
        divContent.textContent = '';
    }

    if (homeActive) {
        homeBtn.classList.remove('active');
    }
    
    if (menuActive) {
        menuBtn.classList.remove('active');
    }

    const { h2, p } = getContact();
    
    divContent.appendChild(h2);
    divContent.appendChild(p);

    contactBtn.classList.add('active');
})
 