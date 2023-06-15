import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const popupOpen = document.querySelector('.popup-open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup-close');
const body = document.querySelector('body');

popupOpen.addEventListener('click', ()=>{
    popup.classList.toggle('active')
    body.classList.toggle('hidden')
})

popupClose.forEach(el => {
    el.addEventListener('click', (e)=>{
        popup.classList.remove('active')
        body.classList.remove('hidden')
    })
});
