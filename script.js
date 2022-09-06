'use strict'; 

const images = [
    {'id': '1' , 'url': './imagens/foto1.jpg' },
    {'id': '2' , 'url': './imagens/foto2.jpg' },
    {'id': '3' , 'url': './imagens/foto3.jpg' }, 
    {'id': '4' , 'url': './imagens/foto4.jpg' },
    {'id': '5' , 'url': './imagens/foto5.jpg' },
    {'id': '6' , 'url': './imagens/foto6.jpg' } 
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += ` 
        <div class ='item'>
        <img src = '${image.url}'
        </div>
        `

    } )
}

loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore (lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);

document.querySelector('#next').addEventListener('click', next);