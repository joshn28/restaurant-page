function contactPage() {
    const main = document.createElement('main');
    const contactForm = document.createElement('form');
    
    contactForm.classList.add('contact-form');
    main.appendChild(contactForm);

    const contactHeader = document.createElement('h1');
    const contactMsg = document.createElement('p');

    contactHeader.textContent = 'Get In Touch';
    contactMsg.textContent = 'This is a fake service.';

    contactForm.appendChild(contactHeader);
    contactForm.appendChild(contactMsg);

    const nameDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');

    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';

    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    contactForm.appendChild(nameDiv);

    const numberDiv = document.createElement('div');
    const numberLabel = document.createElement('label');
    const numberInput = document.createElement('input');

    numberLabel.setAttribute('for', 'phone-number');
    numberLabel.textContent = 'Phone Number:';

    numberInput.setAttribute('type', 'tel');
    numberInput.setAttribute('id', 'phone-number');
    numberInput.setAttribute('name', 'number');

    numberDiv.appendChild(numberLabel);
    numberDiv.appendChild(numberInput);
    contactForm.appendChild(numberDiv);

    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');

    emailLabel.setAttribute('for', 'mail');
    emailLabel.textContent = 'Email:';

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'mail');
    emailInput.setAttribute('name', 'email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    contactForm.appendChild(emailDiv);

    const commentDiv = document.createElement('div');
    const commentLabel = document.createElement('label');
    const commentInput = document.createElement('textarea');

    commentLabel.setAttribute('for', 'comment');
    commentLabel.textContent = 'Comments:';

    commentInput.setAttribute('name', 'comments');
    commentInput.setAttribute('id', 'comment');
    commentInput.setAttribute('rows', '5');

    commentDiv.appendChild(commentLabel);
    commentDiv.appendChild(commentInput);
    contactForm.appendChild(commentDiv);

    const btn = document.createElement('button');
    
    btn.setAttribute('type', 'button');
    btn.textContent = 'Submit';

    contactForm.appendChild(btn);

    return main;
}

export default contactPage;