function navBar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    ul.classList.add('nav-bar');
    nav.appendChild(ul);

    const linkNames = [
        'Home',
        'Menu',
        'Gallery',
        'About'
    ];

    linkNames.forEach(name => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.setAttribute('href', '#');
        a.textContent = name;

        li.appendChild(a);
        ul.appendChild(li);
    });

    return nav;
}

export default navBar;