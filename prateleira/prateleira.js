// Função para mover um livro para outra seção com confirmação
/*function moverLivro(livroElement, novaSecaoId) {
    const confirmacao = confirm("Deseja realmente mover este livro para a seção " + novaSecaoId + "?");

    if (confirmacao) {
        const novaSecao = document.getElementById(novaSecaoId);
        novaSecao.appendChild(livroElement);
    }
}

// Função para adicionar um livro à prateleira
function adicionarLivro() {
    const livroInput = document.getElementById("livro");
    const statusSelect = document.getElementById("status");
    const prateleiraId = statusSelect.value;

    if (livroInput.value.trim() === "") {
        alert("Por favor, insira o nome do livro.");
        return;
    }

    const livro = livroInput.value;
    const prateleira = document.getElementById(prateleiraId);
    const novoLivro = document.createElement("li");
    novoLivro.textContent = livro;

    // Se o livro já estiver em outra seção, mova-o de lá
    const secaoAtual = livroInput.parentNode.querySelector('.prateleira-section');
    if (secaoAtual && secaoAtual !== prateleira) {
        moverLivro(novoLivro, prateleiraId);
    } else {
        prateleira.appendChild(novoLivro);
    }

    livroInput.value = "";
}

// Vincule a função adicionarLivro ao botão "Adicionar Livro"
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    adicionarLivro();
});*/

/*function adicionarLivro() {
    const livroInput = document.getElementById("livro");
    const statusSelect = document.getElementById("status");
    const prateleiraId = statusSelect.value;

    if (livroInput.value.trim() === "") {
        alert("Por favor, insira o nome do livro.");
        return;
    }

    const livro = livroInput.value;
    const prateleira = document.getElementById(prateleiraId);

    if (prateleiraId !== "queroler") {
        const confirmacao = confirm(`Deseja mover o livro "${livro}" para "${statusSelect.options[statusSelect.selectedIndex].text}"?`);
        if (!confirmacao) {
            return;
        }
    }

    // Verifique se o livro já estava em outra prateleira
    const prateleiraAnterior = document.querySelector("#prateleira .prateleira-section:not(#" + prateleiraId + ")");
    const livrosNaPrateleiraAnterior = prateleiraAnterior.querySelectorAll("li");

    livrosNaPrateleiraAnterior.forEach(function (livroNaPrateleiraAnterior) {
        const confirmacao = confirm(`Deseja remover o livro "${livroNaPrateleiraAnterior.textContent}" da prateleira anterior?`);
        if (confirmacao) {
            livroNaPrateleiraAnterior.remove();
        }
    });

    const novoLivro = document.createElement("li");
    novoLivro.textContent = livro;

    prateleira.appendChild(novoLivro);
    livroInput.value = "";
}*/

// JavaScript para tornar o menu responsivo
/*const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu ul");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});
*/
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuToggle.classList.toggle("open");
});



