import { updateFormValidity, handleInputValidation } from './auth.js'

const loginForm = document.querySelector('form[name="login"]')

loginForm.addEventListener('focusout', (e) => {
  handleInputValidation(e)
  updateFormValidity(loginForm)
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  location.replace('/items.html')
})
