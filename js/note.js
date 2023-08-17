let profileToggler = document.getElementById('profile__toggler');
let profile = document.getElementById('profile');

// Profile toggler
profileToggler.addEventListener('click', () => {
    profile.classList.toggle('hidden');
})

let newNote = document.getElementById('new__note');
let noteForm = document.getElementById('note__form');

newNote.addEventListener('click', () => {
    noteForm.classList.toggle('hidden');
})
