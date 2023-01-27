'use strict'
//initial elements
const enter = document.querySelector('.enter');
const btn = document.querySelector('#btn-goal');
const button = document.querySelector('.btn');
const result = document.querySelector('#result');
const done = document.querySelector('.done');
const appointed = document.querySelector('.appointed');

//add event
btn.addEventListener('click', (e) => {
    console.log(enter.value);
    if(enter.value === '') return;
    createDeleteElements(enter.value);
    enter.value = '';
});

done.addEventListener('click', (e) =>{
    result.classList.add('li-hidden');
});

appointed.addEventListener('click', (e) =>{
    result.classList.remove('li-hidden');
});

//create and delete todo
function createDeleteElements(value) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.className = 'li';
    li.textContent = value;

    btn.className = 'btn';
    btn.textContent = 'done';
    li.appendChild(btn);

//remove todo
    btn.addEventListener('click', (e) => {
        result.removeChild(li);
    });

//toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active');
    });

    result.appendChild(li);
};
