let profileToggler = document.getElementById('profile__toggler');
let profile = document.getElementById('profile');

// Profile toggler
profileToggler.addEventListener('click', () => {
    profile.classList.toggle('hidden');
})

// New note form
let newNote = document.getElementById('new__note');
let formContainer = document.getElementById('form__container');

newNote.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
})

let backBtn = document.getElementById('back__btn');
let noteForm = document.getElementById('note__form');

backBtn.addEventListener('click', () => {
    noteForm.reset();
    formContainer.classList.toggle('hidden');
})