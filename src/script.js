"use strict";
var _a, _b;
// Function login
let flag = false;
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;
    //if (email == )
    console.log(`Logging in with email: ${email} and password: ${pwd}`);
}
// Function signup
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    console.log(`Signing up with username: ${username}, email: ${email} and password: ${password}`);
}
//event listeners
(_a = document.getElementById('login-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleLogin);
(_b = document.getElementById('signup-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', handleSignup);
