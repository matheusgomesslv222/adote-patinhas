//Resultado dos livros
    //botao quando clicado abre um modal que lista todas minhas estantes
    //quando clicado na estante eu adiciono o livro a estante e ele é exibido quando voltar pra tela inicial
//==============================================================================================================//


// Estantes predefinidas
let predefinedShelves = [
    { name: 'Romance', books: [] },
    { name: 'Ficção Científica', books: [] },
    // Adicione mais estantes predefinidas conforme necessário
];

// Função para adicionar um livro à estante
function addBookToShelf(selectedShelf, volumeInfo) {
    if (volumeInfo) {
        const { title, imageLinks } = volumeInfo;
        
        if (title && imageLinks && imageLinks.thumbnail) {
            const newBook = {
                title: volumeInfo.title,
                thumbnail: imageLinks.thumbnail
            };

            console.log('Novo livro:', newBook); // Adicionado para depuração

            selectedShelf.books.push(newBook);
            console.log('Livro adicionado à estante:', selectedShelf); // Adicionado para depuração

            saveToLocalStorage();
        } else {
            console.error("As informações do livro são inválidas.");
        }
    } else {
        console.error("As informações do livro são inválidas.");
    }
 
}
function saveToLocalStorage() {
    localStorage.setItem('predefinedShelves', JSON.stringify(predefinedShelves));
}

function loadFromLocalStorage() {
    const savedShelves = localStorage.getItem('predefinedShelves');

    if (savedShelves) {
        predefinedShelves = JSON.parse(savedShelves);
    }
}

// Chame a função após o carregamento completo do DOM
window.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    displayBookshelves();
});

function displayBookshelves() {
    const shelvesContainer = document.getElementById('estantes');
    // Limpa o conteúdo anterior
    // shelvesContainer.innerHTML = '';

    // Itera sobre as estantes predefinidas e exibe-as no site
    predefinedShelves.forEach((shelf, index) => {
        console.log('sua shelf', shelf)
        console.log('sua index', index)
        const shelfElement = document.createElement('div');
        shelfElement.classList.add('shelf');
        shelfElement.innerHTML = `<h3>${shelf.name}</h3>
                                  <div class="scroll-livros" id="shelf-${index}"></div>`;

        // Adiciona a estante ao contêiner
        shelvesContainer.appendChild(shelfElement);

        // Exibe os livros da estante
        const estanteContainer = document.getElementById(`shelf-${index}`);
        shelf.books.forEach((volumeInfo) => {
            const bookElement = document.createElement('div');
            bookElement.className = 'livro';

            // Você pode adicionar o restante das informações do livro aqui, como capa e título
            const bookCover = document.createElement('img');
            bookCover.alt = 'Capa do Livro';

            // Verifica se o livro tem uma imagem
            if (volumeInfo.thumbnail) {
                bookCover.src = volumeInfo.thumbnail;
            } else {
                // Adicione o caminho real para o seu placeholder
                bookCover.src = './public/img/istockphoto-489807343-1024x1024.jpg';
            }

            const bookTitleElement = document.createElement('h4');
            bookTitleElement.textContent = volumeInfo.title || 'Título Indisponível';

            bookElement.appendChild(bookCover);
            bookElement.appendChild(bookTitleElement);
            estanteContainer.appendChild(bookElement);
        });

    });
}



// Restante do seu código...

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
                // Verifica se volumeInfo é válido antes de chamar showBookModal
                if (volumeInfo && volumeInfo.title) {
                    showBookModal(volumeInfo);
                }
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
// Função de abrir um modal na tela
const showBookModal = (volumeInfo) => {
    const modal = new bootstrap.Modal(document.getElementById('bookModals'), {});

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
        modalImage.style.width = '150px';
        modalImage.style.height = '200px';
    }

    modalBody.appendChild(modalImage);

    // Adicione a descrição do livro
    const descricao = volumeInfo.description || 'Descrição Indisponível';
    modalBody.innerHTML += `<p><strong>Descrição:</strong> ${descricao}</p>`;

     // Adicione a descrição do livro
     const suasEstantes = volumeInfo.description || 'Descrição Indisponível';
     modalBody.innerHTML += `<p><strong>Suas Estantes:`;

    // Adicione a lista de estantes
    const shelfList = document.createElement('ul');
    shelfList.id = 'minhasEstantesList';
    shelfList.className = 'list-group';

    predefinedShelves.forEach((shelf) => {
        const shelfItem = document.createElement('li');
        shelfItem.className = 'list-group-item';
        shelfItem.textContent = shelf.name;

        // Adicione um evento de clique ao item da lista
        shelfItem.addEventListener('click', () => {
            // Verifica se volumeInfo é válido antes de chamar addBookToShelf
        if (volumeInfo && volumeInfo.title) {
            addBookToShelf(shelf, volumeInfo);
            modal.hide(); // Esconde o modal após a escolha da estante
        }
        });

        shelfList.appendChild(shelfItem);
    });

    modalBody.appendChild(shelfList);

    modal.show();
};


//Função de abrir um modal na tela

//adicionar e procurar livro a estante





  




