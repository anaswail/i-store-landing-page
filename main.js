let images = document.querySelector('.images');
let container = document.querySelector('.container');

function photo(image){
    images.src = image;
}

function color(colors){
    container.style.background = colors;
}