let menuBar = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar');
let loginFrom = document.querySelector('.login');
let loginButton = document.querySelector('#header_login');
let closeButton = document.querySelector('.fa-times');


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

loginButton.addEventListener('click', () => {
    loginFrom.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    loginFrom.classList.remove('active');
});