let themeToggler = document.getElementById('theme__toggler');
let themeMenu = document.getElementById('theme__menu');

let navBarToggler = document.getElementById('navbar__toggler');
let navBar = document.getElementById('navbar');

// Theme toggler
themeToggler.addEventListener('click', () => {
    if (!navBar.classList.contains('hidden')) navBar.classList.add('hidden');
    themeMenu.classList.toggle('hidden');
});

// Menu toggler
navBarToggler.addEventListener('click', () => {
    if (!themeMenu.classList.contains('hidden')) themeMenu.classList.add('hidden');
    navBar.classList.toggle('hidden');
});

