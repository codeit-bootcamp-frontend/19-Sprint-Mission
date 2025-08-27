import { updateFormValidity, handleInputValidation, handlePasswordToggle } from './auth.js'

const authForm = document.querySelector('.auth-form')
const showPasswordButtons = authForm.querySelectorAll('.show-password-button')

authForm.addEventListener('focusout', (e) => {
  handleInputValidation(e)
  updateFormValidity(authForm)
})

authForm.addEventListener('input', () => {
  updateFormValidity(authForm)
})

authForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const isValid = updateFormValidity(authForm)

  if (!isValid) {
    return
  }

  if (authForm.name === 'signup') {
    location.replace('/login.html')
  } else if (authForm.name === 'login') {
    location.replace('/items.html')
  }
})

showPasswordButtons.forEach((button) => {
  button.addEventListener('click', handlePasswordToggle)
})
