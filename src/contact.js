function getContact() {
    const h2 = document.createElement('h1');
    const p = document.createElement('p');

    h2.textContent = 'Contact Us';

    p.textContent = 'Get in touch with us for reservations, inquiries, and more.'

    return { h2, p }
}

export { getContact };