// function criarEstante() {
//     const estanteContainer = document.querySelector(".estantes");
//     const novaEstante = document.createElement("div");
//     novaEstante.classList.add("card");

//     // Conteúdo da nova estante (você pode personalizar conforme necessário)
//     novaEstante.innerHTML = `
//         <img class="card-img-top" src="caminho/para/imagem.jpg" alt="Capa do Livro">
//         <div class="card-body">
//             <!-- Conteúdo da estante aqui -->
//         </div>
//     `;

//     estanteContainer.appendChild(novaEstante);
// }

// // Array para armazenar estantes de livros
// const bookshelves = [];

// // Função para criar uma nova estante de livros
// function createShelf() {
//     const newShelf = {
//         books: [] // Um array para armazenar os livros da estante
//     };
//     bookshelves.push(newShelf); // Adiciona a estante ao array de estantes

//     // Atualize a exibição das estantes no site
//     displayBookshelves();
// }

// function addBookToShelf(shelfIndex, book) {
//     const shelf = bookshelves[shelfIndex];
//     if (shelf) {
//         // Verifica se o livro já está na estante
//         const isBookInShelf = shelf.books.some(existingBook => existingBook.id === book.id);

//         if (!isBookInShelf) {
//             shelf.books.push(book);
//             displayBookshelves(); // Atualiza a exibição das estantes
//             alert('Livro adicionado à estante!');
//         } else {
//             alert('Livro já está na estante!');
//         }
//     } else {
//         console.error("Estante não encontrada.");
//     }
// }

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


// Adiciona a função de pesquisa do Google Books
async function searchBooks() {
    // Pesquisa
    const query = document.getElementById('search').value;
    const apiKey = 'AIzaSyDMWdsaQum9jNpDlIdokQk1ezfDcyvpqpM'; // Substitua pela sua chave de API
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
  
    try {
        const response = await axios.get(apiUrl);
        const books = response.data.items;
      
        const renderSearch = document.getElementById('minhas-estantes');
        renderSearch.innerHTML = `<div class="resultado-pesquisa">
                                    <h4 class="pesquisa">Resultado da pesquisa sobre ${query}</h4>
                                    <div class="Capas"></div>
                                  </div><!--Resultado da Pesquisa-->`;
      
        const capasDiv = document.querySelector('.Capas');
      
        books.forEach(book => {
          const volumeInfo = book.volumeInfo;
          const livroDiv = document.createElement('div');
          livroDiv.className = 'livro';
      
          const imagem = document.createElement('img');
          imagem.alt = 'Capa do Livro';
      
          if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
            imagem.src = volumeInfo.imageLinks.thumbnail;
          } else {
            // Adiciona um placeholder quando a capa não está disponível
            imagem.src = './public/img/istockphoto-489807343-1024x1024.jpg'; // Substitua com o caminho real do seu placeholder
          }
      
          livroDiv.appendChild(imagem);
      
          const cardContent = document.createElement('div');
          cardContent.className = 'card-content';
      
          const titulo = document.createElement('h4');
          titulo.textContent = volumeInfo.title || 'Título Indisponível';
          titulo.textContent = titulo.textContent.length > 20 ? titulo.textContent.substring(0 , 20) + "..." : titulo.textContent

          cardContent.appendChild(titulo);
      
          livroDiv.appendChild(cardContent);
      
          capasDiv.appendChild(livroDiv);

          livroDiv.addEventListener('click', ()=>{
            showBookModal(volumeInfo);
          });
          capasDiv.appendChild(livroDiv)
        });
      } catch (error) {
        console.error('Erro ao chamar a API do GOOGLE BOOKS', error);
      }
  }
  
//Adiciona a função de pesquisa do google books
const estanteLivros = [];
//Função de abrir um modal na tela
const showBookModal = (volumeInfo)=>{
    const modal = new bootstrap.Modal(document.getElementById('bookModal'), {
        
    });

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = volumeInfo.title || 'Titulo Indisponivel';

    // Adicione outras informações do livro conforme necessário
    const autores = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Autor Indisponível';
    modalBody.innerHTML = `<p><strong>Autores:</strong> ${autores}</p>
                            <!-- Adicione mais informações do livro conforme necessário -->`;

                            // Adicione a imagem da capa
    const modalImage = document.createElement('img');
    modalImage.alt = 'Capa do Livro';

    if (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
        modalImage.src = volumeInfo.imageLinks.thumbnail;
    } else {
        // Adicione um placeholder quando a capa não está disponível
        modalImage.src = './public/img/istockphoto-489807343-1024x1024.jpg'; 
        modalImage.style.width = '150px'
        modalImage.style.height = '200px'
    }

    modalBody.innerHTML = '';
    modalBody.appendChild(modalImage);

    // Adicione a descrição do livro
    const descricao = volumeInfo.description || 'Descrição Indisponível';
    modalBody.innerHTML += `<p><strong>Descrição:</strong> ${descricao}</p>`;
    modal.show();  

    
  }

//Função de abrir um modal na tela

//adicionar e procurar livro a estante

// Função para pesquisar e adicionar livro
async function searchAndAddBook() {
    // Obtenha o valor do input de pesquisa
    const searchInput = document.getElementById('searchBookInput');
    const query = searchInput.value;

    // Se o campo de pesquisa estiver vazio, não faça a pesquisa
    if (!query) {
        return;
    }

    // Execute a pesquisa
    const apiKey = 'AIzaSyDMWdsaQum9jNpDlIdokQk1ezfDcyvpqpM';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const books = response.data.items;

        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = ''; // Limpe os resultados anteriores

        books.forEach(book => {
            const volumeInfo = book.volumeInfo;

            // Crie um item de lista para o livro
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center livro-item';

            // Crie uma imagem do livro
            const bookImage = document.createElement('img');
            bookImage.alt = 'Capa do Livro';
            bookImage.style.maxWidth = '30px';

            if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
                bookImage.src = volumeInfo.imageLinks.thumbnail;
            } else {
                // Adiciona um placeholder quando a capa não está disponível
                bookImage.src = './public/img/istockphoto-489807343-1024x1024.jpg'; // Substitua com o caminho real do seu placeholder
            }

            // Adicione a imagem do livro ao item de lista
            listItem.appendChild(bookImage);

            // Crie um elemento de texto para o título do livro
            const bookTitle = document.createElement('span');
            bookTitle.textContent = volumeInfo.title || 'Título Indisponível';
            bookTitle.textContent = bookTitle.textContent.length > 20 ? bookTitle.textContent.substring(0, 20) + "..." : bookTitle.textContent;

            // Adicione o título do livro ao item de lista
            listItem.appendChild(bookTitle);

            // Adicione o item à lista de resultados
            searchResults.appendChild(listItem);

            listItem.addEventListener('click', () => {
                const isBookInEstante = estanteLivros.some(existingBook => existingBook.id === book.id);

                if (!isBookInEstante) {
                    estanteLivros.push(book);
                    alert('Livro adicionado à estante!');
                    console.log(estanteLivros);
                    // Atualiza a exibição da estante
                    const estanteContainer = document.querySelector('.scroll-livros');
                

                    estanteLivros.forEach(livro => {
                        const card = document.createElement('div');
                        card.className = 'card';

                        const img = document.createElement('img');
                        img.className = 'card-img-top';
                        // img.src = livro.imageLinks.thumbnail;
                        img.alt = 'Capa do Livro';
                        img.alt = 'Capa do Livro';

                        if (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
                            img.src = volumeInfo.imageLinks.thumbnail;
                        }else {
                            // Adiciona um placeholder quando a capa não está disponível
                            img.src = './public/img/istockphoto-489807343-1024x1024.jpg'; // Substitua com o caminho real do seu placeholder
                        }

                        const cardBody = document.createElement('div');
                        card.appendChild(img);
                        card.appendChild(cardBody);

                        estanteContainer.appendChild(card);
                    });
                } else {
                    alert('Livro já está na estante!');
                }
                
            });
            
        });
    } catch (error) {
        console.error('Erro ao chamar a API do GOOGLE BOOKS', error);
    }
}

// Adicione um evento de clique ao botão de pesquisa
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchAndAddBook);





  




