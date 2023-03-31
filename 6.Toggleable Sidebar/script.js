const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const nav =  document.querySelector(".nav-link");


toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('close');//toggle can be used to perform add and remove at a single event;


    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
    if (text.style.opacity === '0') {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
    });

    
    nav.classList.toggle('nav-link-close');
});



