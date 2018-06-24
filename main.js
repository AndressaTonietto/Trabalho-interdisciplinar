// Declare all variables
const btn = document.querySelector('.search');
const button = document.querySelector('.login');
const dropdown = document.querySelector('.dropdown');
const logoutBtn = document.querySelector('.logout');
const name = document.querySelector('.name');
const saveBtn = document.querySelector('#save');
const searchInput = document.querySelector('.search-input');

const hide = () => {
    const user = localStorage.getItem('user');
    if (user) {
        button.hidden = true;
        dropdown.hidden = false;
        name.innerHTML = user;
    } else {
        button.hidden = false;
        dropdown.hidden = true;
    }
}
window.onload = hide();

const makeSearch = () => {
    const search = document.querySelector('.input').value;
    window.location = `http://google.com/search?q= ${search}`;
}
btn.addEventListener('click', () => {
    makeSearch();
})
searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        makeSearch();
    }
})

saveBtn.addEventListener('click', () => {
    $('#loginModal').modal('hide');
    const inputName = document.querySelector('#name').value;
    localStorage.setItem('user', inputName);
    hide();
})
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    hide();
})
