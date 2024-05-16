import foodImage from './food.jpg';

function getContent() {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.textContent = 'Best Restaurant in Country';

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

    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem consequuntur non tempora distinctio eius magnam. Pariatur, totam laudantium porro voluptatum ratione ipsa beatae modi molestias obcaecati accusamus! Sunt, doloribus!'

    return { h1, img, p }
}

// console.log(getContent().img);

export { getContent };