function mostrarFormularioRegistro(){
    document.getElementById("registroForm").style.display = "block"
    document.getElementById("loginForm").style.display = "none"

}

function mostrarFormularioLogin(){
    document.getElementById("registroForm").style.display = "none"
    document.getElementById("loginForm").style.display = "block"
}

function autenticar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === 'admin') {
        alert('Login feito com sucesso');

        // Essa função vai redirecionar para a página de destino após o login
        window.location.href = "paginda_de_destino.html";
    } else {
        alert('Usuário ou senha incorretos. Tente novamente!');
    }
}