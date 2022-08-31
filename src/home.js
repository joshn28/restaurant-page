import imgSrc from "./pexels-helena-lopes-693269.jpg";

function homePage() {
    const main = document.createElement('main');
    const div = document.createElement('div');
    const contentDiv = document.createElement('div');

    main.classList.add('home-main');
    main.appendChild(div);
    div.appendChild(contentDiv);

    contentDiv.classList.add('home-intro');

    const pContents = [
        'Once you try it, you will love it.',
        'In tempor aliquet est ac iaculis. Donec eu eros et ipsum accumsan sollicitudin. Sed at tellus a justo pulvinar aliquam eu ut nulla. Duis molestie dolor quis bibendum lobortis. Proin.'
    ];

    pContents.forEach(content => {
        const p = document.createElement('p');
        p.textContent = content;

        contentDiv.appendChild(p);
    });

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Explore';

    contentDiv.appendChild(button);

    const mainImg = new Image();
    mainImg.src = imgSrc;

    main.appendChild(mainImg);

    return main;
}

export default homePage;