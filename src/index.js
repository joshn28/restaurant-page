import './style.css';
import navBar from "./nav-bar";
import homePage from "./home/home";
import contactPage from './contact/contact';
import menuPage from './menu/menu';

const content = document.querySelector("#content");

content.appendChild(navBar());
content.appendChild(homePage());

const homeLink = document.querySelector('.home-link');
const contactLink = document.querySelector('.contact-link');
const menuLink = document.querySelector('.menu-link');

homeLink.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.remove();

    content.appendChild(homePage());
});

contactLink.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.remove();

    content.appendChild(contactPage());
});

menuLink.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.remove();

    content.appendChild(menuPage());
});