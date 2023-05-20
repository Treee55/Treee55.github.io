const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function openContactWindow() {
    // Open a new window with the desired text
    var contactText = "This is the contact information.";
    var contactWindow = window.open("", "_blank", "width=400,height=300");
    contactWindow.document.write("<p>" + contactText + "</p>");
}