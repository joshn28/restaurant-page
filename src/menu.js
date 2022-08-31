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
    const menu = document.createElement('div');

    menu.classList.add('menu');
    main.appendChild(menu);

    const menuItems = [
        {
            name: 'Pancakes',
            src: pancakeSrc
        },
        {
            name: 'Burrito',
            src: burritoSrc
        },
        {
            name: 'Burger',
            src: burgerSrc
        },
        {
            name: 'Pasta',
            src: pastaSrc
        },
        {
            name: 'Ramen',
            src: ramenSrc
        },
        {
            name: 'Salad',
            src: saladSrc
        },
        {
            name: 'Pizza',
            src: pizzaSrc
        },
        {
            name: 'Cooked Sausage',
            src: sausageSrc
        },
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        const itemImg = new Image();
        const itemDesc = document.createElement('span');

        itemDiv.classList.add('menu-item');
        itemImg.src = item.src;
        itemDesc.textContent = item.name;

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemDesc);

        menu.appendChild(itemDiv);
    });

    return main;
}

export default menuPage;