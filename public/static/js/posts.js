'use strict';

const elementDeletePost =  document.querySelectorAll('.delete-post');

console.log(elementDeletePost);

elementDeletePost.forEach((element) => {
    element.onclick = () => {
        console.log(element);
    };
})
