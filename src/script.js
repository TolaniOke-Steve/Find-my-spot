"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.use('/css', express_1.default.static(path_1.default.join(__dirname, '../css')));
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '../images')));
app.use('/src', express_1.default.static(path_1.default.join(__dirname, '../src')));
// index.html on root 
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
// login.html on login route 
app.get('/login', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../login.html'));
});
// starting server on port 3000
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
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
