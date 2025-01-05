const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

  interface Request {
    // Define the properties you need from the request object
  }

  interface Response {
    sendFile: (path: string) => void;
  }

  app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/login.html");
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