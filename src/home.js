import foodImage from './food.jpg';

function getHome() {
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h2.textContent = 'Welcome to Le Gourmet Delight';

    const myFoodImage = new Image();
    let src = myFoodImage.src;
    src = foodImage;

    const imgAttributes = {
        'src': `${src}`,
        'alt': 'food',
        'width': '384',
        'height': '464'
    }

    for (const imgAtt in imgAttributes) {
        img.setAttribute(imgAtt, imgAttributes[imgAtt]);
    }

    p.textContent = 'Experience the finest dining with our exquisite dishes and exceptional service.'

    return { h2, img, p }
}

// console.log(getHome().img);

export { getHome };