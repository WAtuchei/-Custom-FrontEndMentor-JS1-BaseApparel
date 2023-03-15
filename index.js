"use strict";
const emailForm = document.getElementById("emailForm");
const userEmail = document.getElementById("userEmail");
const submitBTN = document.querySelector(".submitArrow")
const errorIcon = document.querySelector(".errorIcon")
const errorMessage = document.querySelector(".errorMessage")

const errorSet = [errorIcon, errorMessage];

const emailChecked = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
}

const invalidForm = () => {
    errorSet.map((error) => {
        error.style.display = "block";
    })
    userEmail.classList.add('input-invalid');
    userEmail.style.borderColor = "var(--SoftRed)"
    errorMessage.innerText = "Please provide a valid email";
}

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
})
// invalidForm();
// (userEmail.onsubmit === isValid) ? null : invalidForm();
// [^@\s]+@[^@\s]+\.[^@\s]+