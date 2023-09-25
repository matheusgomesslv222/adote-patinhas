function criarEstante() {
    const estanteContainer = document.querySelector(".estantes");
    const novaEstante = document.createElement("div");
    novaEstante.classList.add("card");

    // Conteúdo da nova estante (você pode personalizar conforme necessário)
    novaEstante.innerHTML = `
        <img class="card-img-top" src="caminho/para/imagem.jpg" alt="Capa do Livro">
        <div class="card-body">
            <!-- Conteúdo da estante aqui -->
        </div>
    `;

    estanteContainer.appendChild(novaEstante);
}

// Evento de clique para o botão "Adicionar Estante"
document.getElementById("adicionarEstanteBtn").addEventListener("click", criarEstante);

<script>
    // Função para criar uma nova estante
    function criarEstante() {
        const estanteContainer = document.querySelector(".estantes");
        const novaEstante = document.createElement("div");
        novaEstante.classList.add("card");

        // Conteúdo da nova estante (você pode personalizar conforme necessário)
        novaEstante.innerHTML = `
            <img class="card-img-top" src="caminho/para/imagem.jpg" alt="Capa do Livro">
            <div class="card-body">
                <!-- Conteúdo da estante aqui -->
                <button type="button" class="btn btn-danger" onclick="apagarEstante(this)">Apagar Estante</button>
            </div>
        `;

        estanteContainer.appendChild(novaEstante);
    }

    // Função para apagar uma estante
    function apagarEstante(botao) {
        const estante = botao.closest(".card");
        if (estante) {
            estante.remove();
        }
    }

    // Evento de clique para o botão "Adicionar Estante"
    document.getElementById("adicionarEstanteBtn").addEventListener("click", criarEstante);
</script>
