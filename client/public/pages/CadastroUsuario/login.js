function autenticar(){
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 

        if(nome === 'admin' && senha === 'admin'){
            alert ('Login feito com sucesso')

            //Essa função vai redirecionar para a página de destino após login
            window.location.href = "paginda_de_destino.html";
        } else {
            alert('Usuário ou senha incorreto. Tente novamente!');
        }

}