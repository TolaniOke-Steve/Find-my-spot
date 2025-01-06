import express, { Request, Response } from 'express';
import path from 'path';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/src', express.static(path.join(__dirname, '../src')));

// error handling 
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// starting server on port 3000
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// index.html on root 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// login.html on login route 
app.get("/login", (req, res) => {
res.sendFile(path.join(__dirname, '../login.html'));
});





// Function login
let flag: any = false;

function handleLogin(event: Event) {
    event.preventDefault();
    
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pwd = (document.getElementById('pwd') as HTMLInputElement).value;

    //if (email == )
    console.log(`Logging in with email: ${email} and password: ${pwd}`);
}

// Function signup
function handleSignup(event: Event) {
    event.preventDefault();
    
    const username = (document.getElementById('signup-username') as HTMLInputElement).value;
    const email = (document.getElementById('signup-email') as HTMLInputElement).value;
    const password = (document.getElementById('signup-password') as HTMLInputElement).value;

    console.log(`Signing up with username: ${username}, email: ${email} and password: ${password}`);
}

//event listeners
document.getElementById('login-form')?.addEventListener('submit', handleLogin);
document.getElementById('signup-form')?.addEventListener('submit', handleSignup);