import { updateFormValidity, handleInputValidation } from './auth.js'

const signupForm = document.querySelector('form[name="signup"]')

signupForm.addEventListener('focusout', (e) => {
  handleInputValidation(e)
  updateFormValidity(signupForm)
})

signupForm.addEventListener('input', () => {
  updateFormValidity(signupForm)
})

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  location.replace('/login.html')
})
