// loginValidation.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    const username = document.getElementById('UserName').value.trim();
    const password = document.getElementById('Password').value.trim();

    // Perform client-side validation
    let isValid = true;
    const usernameError = document.querySelector('#UserName + .field-validation-valid');
    const passwordError = document.querySelector('#Password + .field-validation-valid');

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

    // If the form is valid, submit it
    if (isValid) {
        // Simulate successful login (replace this with your actual login logic)
        const isLoggedIn = authenticateUser(username, password);
        if (isLoggedIn) {
            // Redirect to the dashboard page after successful login
            window.location.href = '@Url.Action("Myaccount", "Account")'; // Use MVC's Url.Action to generate the correct URL
        } else {
            alert('Invalid username or password');
        }
    }
});

// Function to simulate user authentication (replace this with your actual authentication logic)
function authenticateUser(username, password) {
    // Here you would typically make an AJAX request to your server to authenticate the user
    // For testing purposes, we're just checking if the username is 'admin' and password is 'password'
    return username === 'admin' && password === 'password';
}

// Show/hide password
const passwordInput = document.getElementById('Password');
const showPasswordCheckbox = document.createElement('label');
showPasswordCheckbox.innerHTML = `
    <input type="checkbox" id="showPassword">
    Show Password
`;

passwordInput.parentNode.appendChild(showPasswordCheckbox.firstChild);
showPasswordCheckbox.firstChild.addEventListener('change', function () {
    passwordInput.type = this.checked ? 'text' : 'password';
});

