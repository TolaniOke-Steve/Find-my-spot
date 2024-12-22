// Function to handle login
function handleLogin(event: Event) {
    event.preventDefault();
    
    const username = (document.getElementById('login-username') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;

    // Add your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
}

// Function to handle signup
function handleSignup(event: Event) {
    event.preventDefault();
    
    const username = (document.getElementById('signup-username') as HTMLInputElement).value;
    const email = (document.getElementById('signup-email') as HTMLInputElement).value;
    const password = (document.getElementById('signup-password') as HTMLInputElement).value;

    // Add your signup logic here
    console.log(`Signing up with username: ${username}, email: ${email} and password: ${password}`);
}

// Add event listeners to the forms
document.getElementById('login-form')?.addEventListener('submit', handleLogin);
document.getElementById('signup-form')?.addEventListener('submit', handleSignup);