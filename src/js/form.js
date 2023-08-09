// Função para a troca de formulários!
var formLogin = document.getElementById('form-login')
var formCad = document.getElementById('form-cad')
var mainForm = document.getElementById('main-form')

function switchFormCad() {
    formLogin.classList.replace('show-form', 'close-form')
    setTimeout(() => {
        formLogin.classList.replace('d-flex', 'd-none')
        mainForm.style.height = '540px'
    }, 1400);
    setTimeout(() => {
        formCad.classList.replace('d-none', 'd-flex')
    }, 1500)
    formCad.classList.replace('close-form', 'show-form')
}

    function switchFormLogin() {
    formCad.classList.replace('show-form', 'close-form')
    setTimeout(() => {
        formCad.classList.replace('d-flex', 'd-none')
    }, 1400);
    setTimeout(() => {
        formLogin.classList.replace('d-none', 'd-flex')
        mainForm.style.height = ''
    }, 1500);
    formLogin.classList.replace('close-form', 'show-form')
}
// Função para as verificações dos inputs no front-end!