// Função para a troca de formulários!
let formLogin = document.getElementById('form-login')
let formCad = document.getElementById('form-cad')
let mainForm = document.getElementById('main-form')
var errorMessage = document.getElementById('error-message');
var successMessage = document.getElementById('success-message');
var cadUsername = document.getElementById('cad-user');
var cadEmail = document.getElementById('cad-email');
var cadPassword = document.getElementById('cad-password');
var cadPasswordConfirm = document.getElementById('cad-password-confirm');


function switchFormCad() {
    formLogin.classList.replace('show-form', 'close-form')
    setTimeout(() => {
        formLogin.classList.replace('d-flex', 'd-none')
        mainForm.style.height = '558px'
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
        mainForm.style.height = '558px'
    }, 1500);
    formLogin.classList.replace('close-form', 'show-form')
}
// Função para as verificações dos inputs no front-end!

function validateCadastro() {
    var username = cadUsername.value;
    var email = cadEmail.value;
    var password = cadPassword.value;
    var confirmPassword = cadPasswordConfirm.value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Por favor, insira um endereço de e-mail válido.";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem. Por favor, digite novamente.";
        return;
    }

    // Se todas as verificações estiverem ok
    errorMessage.textContent = ""; 
    successMessage.textContent = "Cadastro Realizado com sucesso";

    cadUsername.value = "";
    cadEmail.value = "";
    cadPassword.value = "";
    cadPasswordConfirm.value = "";

    // Voltar para o formulário de login 
    setTimeout(() => {
        successMessage.textContent = ""; 
        switchFormLogin();
    }, 300); 
}

//Validação login
var loginErrorMessage = document.getElementById('login-error-message');
var loginEmail = document.getElementById('login-email');
var loginPassword = document.getElementById('login-password');

function validateLogin() {
    var email = loginEmail.value;
    var password = loginPassword.value;

    if (!email.includes("@") || !email.includes(".")) {
        loginErrorMessage.textContent = "Por favor, insira um e-mail válido.";
        return;
    }

    if (password.length < 8) {
        loginErrorMessage.textContent = "A senha e o e-mail deve coincidir.";
        return;
    }

    // Se todas as verificações estiverem ok
    loginErrorMessage.textContent = ""; 

    // Redirecionar para a Home
    window.location.href = "../../index.html"; 
}