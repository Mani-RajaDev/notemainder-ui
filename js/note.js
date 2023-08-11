let themeToggler = document.getElementById('theme__toggler');
let themeMenu = document.getElementById('theme__menu');

let profileToggler = document.getElementById('profile__toggler');
let profile = document.getElementById('profile');

// Theme toggler
themeToggler.addEventListener('click', () => {
    if (!profile.classList.contains('hidden')) profile.classList.add('hidden');
    themeMenu.classList.toggle('hidden');
});

// Profile toggler
profileToggler.addEventListener('click', () => {
    if (!themeMenu.classList.contains('hidden')) themeMenu.classList.add('hidden');
    profile.classList.toggle('hidden');
})

let newNote = document.getElementById('new__note');
let noteForm = document.getElementById('note__form');

newNote.addEventListener('click', () => {
    noteForm.classList.toggle('hidden');
})