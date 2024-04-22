// registerValidation.js

document.querySelector('#registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    const name = document.getElementById('Name').value.trim();
    const username = document.getElementById('UserName').value.trim();
    const password = document.getElementById('Password').value.trim();
    const confirmPassword = document.getElementById('ConfirmPassword').value.trim();
    const birthDate = document.getElementById('BirthDate').value;
    const sex = document.getElementById('Sex').value;

    // Perform client-side validation
    let isValid = true;
    const nameError = document.querySelector('#Name + .field-validation-valid');
    const usernameError = document.querySelector('#UserName + .field-validation-valid');
    const passwordError = document.querySelector('#Password + .field-validation-valid');
    const confirmPasswordError = document.querySelector('#ConfirmPassword + .field-validation-valid');
    const birthDateError = document.querySelector('#BirthDate + .field-validation-valid');
    const sexError = document.querySelector('#Sex + .field-validation-valid');

    if (name === '') {
        isValid = false;
        nameError.textContent = 'Please enter your name.';
    } else {
        nameError.textContent = '';
    }

    if (username === '') {
        isValid = false;
        usernameError.textContent = 'Please enter a username.';
    } else {
        usernameError.textContent = '';
    }

    if (password === '') {
        isValid = false;
        passwordError.textContent = 'Please enter a password.';
    } else {
        passwordError.textContent = '';
    }

    if (confirmPassword === '') {
        isValid = false;
        confirmPasswordError.textContent = 'Please confirm your password.';
    } else {
        confirmPasswordError.textContent = '';
    }

    if (birthDate === '') {
        isValid = false;
        birthDateError.textContent = 'Please enter your birth date.';
    } else {
        birthDateError.textContent = '';
    }

    if (sex === '') {
        isValid = false;
        sexError.textContent = 'Please select your sex.';
    } else {
        sexError.textContent = '';
    }

    if (password !== confirmPassword) {
        isValid = false;
        confirmPasswordError.textContent = 'Passwords do not match.';
    }

    // If the form is valid, submit it
    if (isValid) {
        this.submit();
    }
});
