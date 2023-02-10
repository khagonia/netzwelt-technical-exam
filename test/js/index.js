const FORM_LOGIN = document.querySelector('.login-form')

FORM_LOGIN.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(FORM_LOGIN);
  console.log(formData);
})
