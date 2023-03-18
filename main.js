"use strict";
const emailForm = document.getElementById("emailForm"),
    userEmail = document.getElementById("userEmail"),
    errorIcon = document.querySelector(".errorIcon"),
    errorMessage = document.querySelector(".errorMessage"),
    errorSet = [errorIcon, errorMessage];

// Email Check
const emailChecked = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testEmail = input.value.trim();

    if (re.test(testEmail)) {
        const subEmail = testEmail.toLowerCase();

        localStorage.setItem('subEmail', subEmail);
        return true

    } else {
        invalidForm();
    }
}
// Length Check
const lengthChecked = (input, min) => {
    const testLength = input.value.trim();
    
    if (testLength.length === 0) {
        invalidForm();

    } else if (testLength.length < min) {
        errorMessage.innerText = "The email was too short";

    } else {
        return true
    }
}
// Error
const invalidForm = () => {
    errorSet.map((error) => {
        error.style.display = "block";
    })
    userEmail.classList.add('input-invalid');
    errorMessage.classList.add('fading-animated')
    errorMessage.innerText = "Please provide a valid email";

    // after CSS animated
    errorMessage.addEventListener('animationend', () => {
        errorMessage.classList.remove('fading-animated')
    })
}
// Submit
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailChecked(userEmail),
        maillength = lengthChecked(userEmail, 6);

    switch (email && maillength) {
        case true:
            window.location.href = "https://watuchei.github.io/-Custom-FrontEndMentor-JS1-BaseApparel/subscribed.html";
            break;
        default:
            break;
    }
})  
// /[^@\s]+@[^@\s]+\.[^@\s]+/
// /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;