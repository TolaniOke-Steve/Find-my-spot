// form validation
document.addEventListener('DOMContentLoaded', function () {
    var login = document.getElementById('login-form');
    var signup = document.getElementById('signup-form)');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('pwd');
    var Firstname = document.getElementById('input-box');
    var Lastname = document.getElementById('input-box');
    var ConfirmPassword = document.getElementById('cpwd');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('pwd-error');
    var FirstnameError = document.getElementById('firstname-error');
    var LastnameError = document.getElementById('lastname-error');
    var ConfirmPasswordError = document.getElementById('cpws-error');
    // error messages hidden
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    FirstnameError.style.display = 'none';
    LastnameError.style.display = 'none';
    ConfirmPasswordError.style.display = 'none';
    // login null check
    login === null || login === void 0 ? void 0 : login.addEventListener('submit', function (event) {
        event.preventDefault();
        // Reset previous error messages
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        FirstnameError.style.display = 'none';
        LastnameError.style.display = 'none';
        ConfirmPasswordError.style.display = 'none';
        var email = emailInput.value;
        var password = passwordInput.value;
        var fname = Firstname.value;
        var lname = Lastname.value;
        var cpwd = ConfirmPassword.value;
        var pwd = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_=+[\]\\;/'`~]*$/;
        var valid = true;
        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            emailError.style.display = 'block';
            valid = false;
        }
        // Validate password
        if (!pwd.test(password)) {
            passwordError.style.display = 'block';
            valid = false;
        }
        if (!fname) {
            FirstnameError.style.display = 'block';
            valid = false;
        }
        if (!lname) {
            LastnameError.style.display = 'block';
            valid = false;
        }
        if (password !== cpwd) {
            ConfirmPasswordError.style.display = 'block';
            valid = false;
        }
        if (valid) {
            // Form submission (AJAX or proceed to server)
            login.submit();
        }
    });
});
