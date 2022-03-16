const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click",() => {
  navLinks.classList.toggle("open");
});
// ham code
const menuBtn = document.querySelector('.menu-btn'); // selecting the element with class .menu-btn
let menuOpen = false; // if the menu is open which initially will be false because the user has not clicked yet
menuBtn.addEventListener('click',() => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        // ham code
        navLinks.classList.toggle("open");
    }else {
        menuBtn.classList.remove('open');
        menuOpen=false;
        // ham code
        navLinks.classList.toggle("open");
    }
});