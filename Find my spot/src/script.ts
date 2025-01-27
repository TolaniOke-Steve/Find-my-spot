document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form') as HTMLFormElement | null;
  const loginForm = document.getElementById('login-form') as HTMLFormElement | null;

  if (signupForm) {
    handleSignupForm(signupForm);
  }

  if (loginForm) {
    handleLoginForm(loginForm);
  }
});

// signup  validation
function handleSignupForm(form: HTMLFormElement) {
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('pwd') as HTMLInputElement;
  const firstNameInput = document.getElementById('firstname') as HTMLInputElement;
  const lastNameInput = document.getElementById('lastname') as HTMLInputElement;
  const confirmPasswordInput = document.getElementById('cpwd') as HTMLInputElement;

  const emailError = document.getElementById('email-error')!;
  const passwordError = document.getElementById('pwd-error')!;
  const firstNameError = document.getElementById('firstname-error')!;
  const lastNameError = document.getElementById('lastname-error')!;
  const confirmPasswordError = document.getElementById('cpwd-error')!;

  // Hide error messages initially
  [emailError, passwordError, firstNameError, lastNameError, confirmPasswordError].forEach((el) => {
    el.style.display = 'none';
  });

  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Reset error messages
    [emailError, passwordError, firstNameError, lastNameError, confirmPasswordError].forEach((el) => {
      el.style.display = 'none';
    });

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    const pwdRegex = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_=+[\]\\;/'`~]*$/;

    let valid = true;

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      emailError.style.display = 'block';
      valid = false;
    }

    // Validate password
    if (!pwdRegex.test(password)) {
      passwordError.style.display = 'block';
      valid = false;
    }

    // Validate first name
    if (!firstName) {
      firstNameError.style.display = 'block';
      valid = false;
    }

    // Validate last name
    if (!lastName) {
      lastNameError.style.display = 'block';
      valid = false;
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
      confirmPasswordError.style.display = 'block';
      valid = false;
    }

    if (valid) {
      // Submit the form
      form.submit();
    }
  });
}

// login validaton

function handleLoginForm(form: HTMLFormElement) {
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('pwd') as HTMLInputElement;

  const emailError = document.getElementById('email-error')!;
  const passwordError = document.getElementById('pwd-error')!;

  // Hide error messages initially
  [emailError, passwordError].forEach((el) => {
    el.style.display = 'none';
  });

  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Reset error messages
    [emailError, passwordError].forEach((el) => {
      el.style.display = 'none';
    });

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

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
      // Submit the form
      form.submit();
    }
  });
}