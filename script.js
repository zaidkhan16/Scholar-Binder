function toggleSignup() {
  var loginContainer = document.querySelector('.container');
  var signupContainer = document.querySelector('.signup-container');
  
  if (loginContainer.style.display === 'none') {
    loginContainer.style.display = 'flex';
    signupContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'flex';
  }
}
