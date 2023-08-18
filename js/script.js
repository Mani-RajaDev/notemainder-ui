let navBarToggler = document.getElementById('navbar__toggler');
let navBar = document.getElementById('navbar');

// Menu toggler
navBarToggler.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
});
