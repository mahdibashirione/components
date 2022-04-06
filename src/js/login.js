const toLogin = document.querySelector('.btnToLogin')
const toCreateAccount = document.querySelector('.btnToCreateAccount')

const loginPage = document.querySelector('.loginPage')
const createAccountPage = document.querySelector('.createAccountPage')

toCreateAccount.addEventListener("click", e => {
  e.preventDefault()
  loginPage.classList.add('hidden')
  createAccountPage.classList.remove('hidden')
})

toLogin.addEventListener("click", e => {
  e.preventDefault()
  loginPage.classList.remove('hidden')
  createAccountPage.classList.add('hidden')
})