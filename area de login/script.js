document.addEventListener('DOMContentLoaded', () => {
    const esquecerSenhaLink = document.getElementById('esqueciSenha');
    const cancelarRedefinir = document.getElementById('cancelarRedefinir');
    const criarContaLink = document.getElementById('naoTemConta');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const redefinirSenhaDiv = document.getElementById('redefinirSenha');
    const criarContaDiv = document.getElementById('criarConta');

    esquecerSenhaLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.classList.add('hidden');
        redefinirSenhaDiv.classList.add('show');
    });

    cancelarRedefinir.addEventListener('click', () => {
        redefinirSenhaDiv.classList.remove('show');
        loginFormContainer.classList.remove('hidden');
    });

    criarContaLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.classList.toggle('hidden');
        criarContaDiv.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const criarContaLink = document.getElementById('naoTemConta');
    const criarContaForm = document.getElementById('criarConta');
    const loginForm = document.getElementById('loginForm');
    const submitCriarContaButton = document.getElementById('submitCriarConta');
    
   
    criarContaLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        criarContaForm.style.display = 'block';
    });

    
    submitCriarContaButton.addEventListener('click', (e) => {
        e.preventDefault();
      

        
        window.location.href = 'planos.html';
    });
});
