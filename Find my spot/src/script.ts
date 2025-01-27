// form validation
document.addEventListener('DOMContentLoaded', () => {
  const login = document.getElementById('login-form') as HTMLFormElement;
  const signup = document.getElementById('signup-form') as HTMLFormElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('pwd') as HTMLInputElement;
  const Firstname = document.getElementById('firstname') as HTMLInputElement;
  const Lastname = document.getElementById('lastname') as HTMLInputElement;
  const ConfirmPassword = document.getElementById('cpwd') as HTMLInputElement;

  const emailError = document.getElementById('email-error')!;
  const passwordError = document.getElementById('pwd-error')!;
  const FirstnameError = document.getElementById('firstname-error')!;
  const LastnameError = document.getElementById('lastname-error')!;
  const ConfirmPasswordError = document.getElementById('cpwd-error')!;

  // error messages hidden
  emailError.style.display = 'none';
  passwordError.style.display = 'none';
  FirstnameError.style.display = 'none';
  LastnameError.style.display = 'none';
  ConfirmPasswordError.style.display = 'none';

  // login null check
  login?.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Reset previous error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    FirstnameError.style.display = 'none';
    LastnameError.style.display = 'none';
    ConfirmPasswordError.style.display = 'none';

    const email = emailInput.value;
    const password = passwordInput.value;
    const fname = Firstname.value;
    const lname = Lastname.value;
    const cpwd = ConfirmPassword.value;

    const pwd = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_=+[\]\\;/'`~]*$/;

    let valid = true;

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
  
    if (!fname){
      FirstnameError.style.display ='block';
      valid = false;
    }

    if (!lname){
      LastnameError.style.display ='block';
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