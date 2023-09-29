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

// Array para armazenar estantes de livros
const bookshelves = [];

// Função para criar uma nova estante de livros
function createShelf() {
    const newShelf = {
        books: [] // Um array para armazenar os livros da estante
    };
    bookshelves.push(newShelf); // Adiciona a estante ao array de estantes

    // Atualize a exibição das estantes no site
    displayBookshelves();
}

// Função para adicionar um livro a uma estante
function addBookToShelf(shelfIndex, bookTitle) {
    const shelf = bookshelves[shelfIndex];
    if (shelf) {
        shelf.books.push(bookTitle);

        // Atualize a exibição das estantes no site
        displayBookshelves();
    } else {
        console.error("Estante não encontrada.");
    }
}

// Função para exibir as estantes no site
function displayBookshelves() {
    const shelvesContainer = document.getElementById("bookshelves");

    if (shelvesContainer) {
        // Limpe o conteúdo anterior
        shelvesContainer.innerHTML = "";

        // Itere sobre as estantes e exiba-as no site
        bookshelves.forEach((shelf, index) => {
            const shelfElement = document.createElement("div");
            shelfElement.classList.add("shelf");
            shelfElement.innerHTML = `<h2>Estante ${index + 1}</h2>`;

            // Exiba os livros da estante
            shelf.books.forEach((bookTitle) => {
                const bookElement = document.createElement("p");
                bookElement.textContent = bookTitle;
                shelfElement.appendChild(bookElement);
            });

            // Botão para adicionar um livro à estante
            const addButton = document.createElement("button");
            addButton.textContent = "Adicionar Livro";
            addButton.addEventListener("click", () => {
                const bookTitle = prompt("Digite o título do livro:");
                if (bookTitle) {
                    addBookToShelf(index, bookTitle);
                }
            });

            shelfElement.appendChild(addButton);
            shelvesContainer.appendChild(shelfElement);
        });
    } else {
        console.error("Contêiner de estantes não encontrado.");
    }
}

// Exiba as estantes iniciais
displayBookshelves();

// Adicione um ouvinte de eventos ao botão "Criar Estante" após o carregamento do documento
window.addEventListener("DOMContentLoaded", function() {
    const createShelfButton = document.getElementById("createShelfButton");
    if (createShelfButton) {
        createShelfButton.addEventListener("click", createShelf);
    } else {
        console.error("Botão 'Criar Estante' não encontrado.");
    }
});


  




