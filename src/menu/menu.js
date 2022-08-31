import pancakeSrc from './pancakes.jpg';
import burritoSrc from './burrito.jpg';
import burgerSrc from './burger.jpg';
import pastaSrc from './pasta.jpg';
import ramenSrc from './ramen.jpg';
import saladSrc from './salad.jpg';
import pizzaSrc from './pizza.jpg';
import sausageSrc from './sausage.jpg';

function menuPage() {
    const main = document.createElement('main');
    const menuDiv = document.createElement('div');
    const menu = document.createElement('div');
    const header = document.createElement('h1');

    header.textContent = 'Our Best Dishes';
    menu.classList.add('menu');

    menuDiv.classList.add('menu-container');
    menuDiv.appendChild(header);
    menuDiv.appendChild(menu);
    
    main.appendChild(menuDiv);

    const menuItems = [
        {
            name: 'Pancakes',
            src: pancakeSrc,
            price: '$7.99',
        },
        {
            name: 'Burrito',
            src: burritoSrc,
            price: '$3.19',
        },
        {
            name: 'Burger',
            src: burgerSrc,
            price: '$6.99',
        },
        {
            name: 'Pasta',
            src: pastaSrc,
            price: '$18.97',
        },
        {
            name: 'Ramen',
            src: ramenSrc,
            price: '$14.29',
        },
        {
            name: 'Salad',
            src: saladSrc,
            price: '$25.25',
        },
        {
            name: 'Pizza',
            src: pizzaSrc,
            price: '$12.99',
        },
        {
            name: 'Cooked Sausage',
            src: sausageSrc,
            price: '$9.97'
        },
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        const itemImg = new Image();

        const itemInfo = document.createElement('div');
        const itemDesc = document.createElement('span');
        const itemPrice = document.createElement('span');

        itemDiv.classList.add('menu-item');
        itemInfo.classList.add('menu-description');

        itemImg.src = item.src;
        itemPrice.textContent = item.price;
        itemDesc.textContent = item.name;

        itemInfo.appendChild(itemDesc);
        itemInfo.appendChild(itemPrice);

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemInfo);

        menu.appendChild(itemDiv);
    });

    return main;
}

export default menuPage;