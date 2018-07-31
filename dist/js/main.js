//select items from the DOM

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu
let showMenu = false;

//add event listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    //loop through all the items and add class to each one
    navItems.forEach(item => item.classList.add('show'));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    //loop through all the items and remove show class from each one
    navItems.forEach(item => item.classList.remove('show'));
    //set menu state
    showMenu = false;
  }
}
