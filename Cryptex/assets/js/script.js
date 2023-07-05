'use strict';


// Add Event

const addEventOnElem = function(elem,type,callback){
    if(elem.length > 1){
        for(let i = 0; i<elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    }else{
        elem.addEventListener(type,callback);
    }
} 

// navbar toggle 

const navbar =  document.querySelector("[data-navbar]");
const navBarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavBar = function(){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavBar);

const closeNavbar = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElem(navBarLinks, "click", closeNavbar);


// header active 

const header = document.querySelector("[data-header]");

const activeHEader = function () {
    if(window.scrollY > 300){
        header.classList.add("active");
    } else {
        header.classList.remove("active"); 
    }
}

addEventOnElem(window,"scroll",activeHEader);


// Toggle Active on Add to Fav 

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function(){
    this.classList.toggle("active");
}

addEventOnElem(addToFavBtns,"click",toggleActive);