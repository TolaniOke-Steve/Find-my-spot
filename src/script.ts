// form validation
document.addEventListener('DOMContentLoaded', () => {
  const login = document.getElementById('login-form') as HTMLFormElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('pwd') as HTMLInputElement;
  const emailError = document.getElementById('hid')!;
  const passwordError = document.getElementById('hid')!;

  // error messages hidden
  emailError.style.display = 'none';
  passwordError.style.display = 'none';

  // login null check
  login?.addEventListener('submit', (event: Event) => {
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