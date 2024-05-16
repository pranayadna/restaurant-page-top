import { getContent } from './content.js';

const divContent = document.querySelector('#content');
let { h1, img, p } = getContent();
divContent.appendChild(h1);
divContent.appendChild(img);
divContent.appendChild(p);

// console.log(src1);
// function insideContent() {

//     // const contents = {
//     //     h1: content()
//     // }



//     // divContent.appendChild(contents.h1);

//     // return divContent;
// }