"use strict";
// form validation
document.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pwd');
    const emailError = document.getElementById('hid');
    const passwordError = document.getElementById('hid');
    // error messages hidden
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    // login null check
    login === null || login === void 0 ? void 0 : login.addEventListener('submit', (event) => {
        event.preventDefault();
        // Reset previous error messages
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        const email = emailInput.value;
        const password = passwordInput.value;
        let valid = true;
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
            // Form submission (AJAX or proceed to server)
            login.submit();
        }
    });
});
