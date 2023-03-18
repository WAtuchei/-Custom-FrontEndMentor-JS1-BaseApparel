"use strict";
const subMessage = document.getElementById('subMessage'),
     sessionEmail = localStorage.getItem('subEmail');

window.addEventListener('load', () => {
    if (sessionEmail === null) {
        subMessage.innerHTML = `We'll notice you by the email.`
    } else {
        subMessage.innerHTML = `We'll notice you by the email <span>${sessionEmail}</span>`
    }
 })
 window.addEventListener('unload', () => {
    localStorage.clear();
    window.location.href = "https://watuchei.github.io/-Custom-FrontEndMentor-JS1-BaseApparel/";
})