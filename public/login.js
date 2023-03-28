function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'prayer.html'; //takes you to the next html
} 


