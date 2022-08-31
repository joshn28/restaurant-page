function navBar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    ul.classList.add('nav-bar');
    nav.appendChild(ul);

    const linkNames = [
        'Home',
        'Menu',
        'Contact',
    ];

    linkNames.forEach(name => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        
        span.classList.add(`${name.toLowerCase()}-link`);
        span.textContent = name;

        li.appendChild(span);
        ul.appendChild(li);
    });

    return nav;
}

export default navBar;