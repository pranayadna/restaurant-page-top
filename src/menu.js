function getMenu() {
    const h2 = document.createElement('h1');
    const p = document.createElement('p');

    h2.textContent = 'Our Menu';

    p.textContent = 'Explore our delicious offerings from appetizers to desserts.'

    return { h2, p }
}

export { getMenu };