const btn = document.querySelector('.search');

btn.addEventListener('click', () => {
    const search = document.querySelector('.input').value;
    window.location = `http://google.com/search?q= ${search}`;
})

const button = document.querySelector('.login');
const dropdown = document.querySelector('.dropdown');
const name = document.querySelector('.name');

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

const saveBtn = document.querySelector('#save');
const logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    hide();
})

saveBtn.addEventListener('click', () => {
    $('#loginModal').modal('hide');
    const inputName = document.querySelector('#name').value;
    localStorage.setItem('user', inputName);
    hide();
})
