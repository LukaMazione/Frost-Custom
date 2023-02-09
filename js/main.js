const navBtn = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav__items');

const handleNav = () =>{
    nav.classList.toggle('nav__items--active')
}

navBtn.addEventListener('click', handleNav);