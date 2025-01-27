document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signup-form');
    var loginForm = document.getElementById('login-form');
    if (signupForm) {
        handleSignupForm(signupForm);
    }
    if (loginForm) {
        handleLoginForm(loginForm);
    }
});
// signup  validation
function handleSignupForm(form) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('pwd');
    var firstNameInput = document.getElementById('firstname');
    var lastNameInput = document.getElementById('lastname');
    var confirmPasswordInput = document.getElementById('cpwd');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('pwd-error');
    var firstNameError = document.getElementById('firstname-error');
    var lastNameError = document.getElementById('lastname-error');
    var confirmPasswordError = document.getElementById('cpwd-error');
    // Hide error messages initially
    [emailError, passwordError, firstNameError, lastNameError, confirmPasswordError].forEach(function (el) {
        el.style.display = 'none';
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Reset error messages
        [emailError, passwordError, firstNameError, lastNameError, confirmPasswordError].forEach(function (el) {
            el.style.display = 'none';
        });
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        var firstName = firstNameInput.value.trim();
        var lastName = lastNameInput.value.trim();
        var confirmPassword = confirmPasswordInput.value.trim();
        var pwdRegex = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_=+[\]\\;/'`~]*$/;
        var valid = true;
        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            emailError.style.display = 'block';
            valid = false;
        }
        // Validate password
        if (!pwdRegex.test(password)) {
            passwordError.style.display = 'block';
            valid = false;
        }
        // Validate first name
        if (!firstName) {
            firstNameError.style.display = 'block';
            valid = false;
        }
        // Validate last name
        if (!lastName) {
            lastNameError.style.display = 'block';
            valid = false;
        }
        // Confirm passwords match
        if (password !== confirmPassword) {
            confirmPasswordError.style.display = 'block';
            valid = false;
        }
        if (valid) {
            // Submit the form
            form.submit();
        }
    });
}
function handleLoginForm(form) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('pwd');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('pwd-error');
    // Hide error messages initially
    [emailError, passwordError].forEach(function (el) {
        el.style.display = 'none';
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Reset error messages
        [emailError, passwordError].forEach(function (el) {
            el.style.display = 'none';
        });
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        var valid = true;
        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            emailError.style.display = 'block';
            valid = false;
        }
        // Validate password
        if (!password) {
            passwordError.style.display = 'block';
            valid = false;
        }
        if (valid) {
            // Submit the form
            form.submit();
        }
    });
}
