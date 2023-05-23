const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function openContactWindow() {
    // Open a new window with the desired text
    var contactText = "Contact information: \n email: parkerspaan@yahoo.com \n GitHub: https://github.com/Treee55/GCUWork";
    var contactWindow = window.open("", "_blank", "width=250,height=100");
    contactWindow.document.write("<p>" + contactText + "</p>");
}