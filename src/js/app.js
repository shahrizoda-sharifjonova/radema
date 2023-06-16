import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const popupOpen = document.querySelectorAll('.popup-open');
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup-close');
const body = document.querySelector('body');


popupOpen.forEach(openBtn =>{
    openBtn.addEventListener('click', ()=>{
        let tar = openBtn.getAttribute("data-target")
        document.querySelector(`#${tar}`).classList.add('active');
        console.log(tar);
    })
})

popupClose.forEach(el => {
    el.addEventListener('click', ()=>{
        popup.forEach(popupItem => {
            popupItem.classList.remove('active')
        })
        body.classList.remove('hidden')
    })
});


const popupWhatsapp = `
    <div class="popup__item">
        <p class="popup__subtitle">Ваш телефон в WhatsApp*</p>
        <input class="popup__input" type="number" placeholder="+7 ( _ _ _ ) - _ _ _ - _ _ - _ _" required="">
    </div>
`;
const popupTelegram = `
    <div class="popup__item">
        <p class="popup__subtitle">Ваш телефон в Telegram*</p>
        <input class="popup__input" type="text" placeholder="Ваш username в Telegram" required="">
    </div>
`;
const popupInstagram = `
    <div class="popup__item">
        <p class="popup__subtitle">Ваш username в Instagram*</p>
        <input class="popup__input" type="text" placeholder="Ваш username в Instagram" required="">
    </div>
`;
const popupFacebook = `
    <div class="popup__item">
        <p class="popup__subtitle">Ваш username в Facebook*</p>
        <input class="popup__input" type="number" placeholder="Ваш username в Facebook" required="">
    </div>
`;
const item = document.querySelector('.popup__item#changable');
const select = document.querySelector('.popup__select');
const icons = document.querySelectorAll('.popup__phone');
select.addEventListener('change', (e) => {
    console.log(select.value);
    if(select.value === 'whatsapp') {
        item.innerHTML = popupWhatsapp;
        icons.forEach(icon => {
            icon.classList.remove('active')
            if(icon.classList.contains('whatsapp')){
                icon.classList.add('active')
            }
        });
    }
    if(select.value === 'telegram') {
        item.innerHTML = popupTelegram;
        icons.forEach(icon => {
            icon.classList.remove('active')
            if(icon.classList.contains('telegram')){
                icon.classList.add('active')
            }
        });
    }
    if(select.value === 'instagram') {
        item.innerHTML = popupInstagram;
        icons.forEach(icon => {
            icon.classList.remove('active')
            if(icon.classList.contains('instagram')){
                icon.classList.add('active')
            }
        });
    }
    if(select.value === 'facebook') {
        item.innerHTML = popupFacebook;
        icons.forEach(icon => {
            icon.classList.remove('active')
            if(icon.classList.contains('facebook')){
                icon.classList.add('active')
            }
        });
    }
})

var sampleForm = document.getElementById('SampleForm');

sampleForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from being submitted

    let element = document.createElement("a");
        element.href = "../files/file.pdf";
        element.download = "file.pdf";

    document.documentElement.appendChild(element);

    element.click();

    document.documentElement.removeChild(element);
});