document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Simulação de autenticação (no mundo real, você enviaria uma solicitação para um servidor)
        alert("Login bem-sucedido!");
        form.reset();
    });
});
