



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