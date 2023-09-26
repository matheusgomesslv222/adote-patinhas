function autenticar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lógica para autenticar
    if (username === "username" && password === "password") {
        alert("Login bem-sucedido!");
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente!");
    }
}
