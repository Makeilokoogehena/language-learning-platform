
const linkNav = document.querySelector('.header__item-link');
const aboutUs = document.getElementById('about');
const costOfClasses = document.getElementById('cost');
const reviews = document.getElementById('reviews');
const contacts = document.getElementById('contacts');
const mainWrapper = document.querySelector('.main__wrapper');






function createTitleElememt(){
const title = document.createElement('h2');
title.classList.add('main__title');
title.textContent = 'This page in progress';
mainWrapper.appendChild(title);
}



linkNav.addEventListener('click', createTitleElememt());


