let title1Films = document.querySelector('.title1');
let title2Films = document.querySelector('.title2');
let bg1Films = document.querySelector('.background1');
let bg2Films = document.querySelector('.background2');


fetch('main.json')
    .then(data => data.json())
    .then(data => {
        dataObject = data;

        console.log(data);
