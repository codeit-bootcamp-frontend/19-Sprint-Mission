import { updateFormValidity, handleInputValidation } from './auth.js'

const authForm = document.querySelector('.auth-form')

authForm.addEventListener('focusout', (e) => {
  handleInputValidation(e)
  updateFormValidity(signupForm)
})

authForm.addEventListener('input', () => {
  updateFormValidity(signupForm)
})

authForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (authForm.name === 'signup') {
    location.replace('/login.html')
  } else if (authForm.name === 'login') {
    location.replace('/items.html')
  }
})
