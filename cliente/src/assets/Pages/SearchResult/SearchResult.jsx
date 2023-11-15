import React, {useState, useEffect, useContext } from 'react';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import HeaderBar from '../../Components/HeaderBar/HeaderBar'
import NavBarMenu from '../../Components/NavBarMenu/NavBarMenu'
import style from './SearchResult.module.css';
import placeholder from '../../../../public/images/placeholder.jpg';
import { useSearch } from '../../../SearchContext';
import Axios from 'axios'

const imageStyle = {
    width: '160px', // Largura desejada
    height: '200px', // Altura desejada
};

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const btn = {
  marginBottom : '5px',
  color: '#8a9ac0',
  border: '1px solid #8a9ac0',
    '&:hover': {
      color: '#081b32f1',
      backgroundColor: '#081b32f1', // Cor de fundo quando o cursor está sobre o botão
    },
}
export default function SearchResult() {
  const { searchResults : books} = useSearch();
  const [ selectedBook , setSelectedBook] = useState(null)
  const [isListEstantesModalOpen, setListEstantesModalOpen] = useState(false);
  const [estantes, setEstantes] = useState([]);

  const [selectedBookInfo, setSelectedBookInfo] = useState(null);


  const handleOpenListEstantesModal = async () => {
    try {
      const response = await Axios.get('http://localhost:3000/estantes');
      setEstantes(response.data);
      console.log('res', response.data)
      setListEstantesModalOpen(true);

    } catch (error) {
      console.error('Erro ao carregar estantes', error);
    }
  };

  const handleCloseListEstantesModal = () => {
    setListEstantesModalOpen(false);
  };

  const modalAddOpen = (book) =>{
    setListEstantesModalOpen(true)
    setSelectedBookInfo(book)
  }


  const handleOpen = (book) =>{
    setSelectedBook(book);
    setSelectedBookInfo(book);
  };

  const handleClose = () =>{
    setSelectedBook(null)
  }
  

  const handleAddToEstante = async (estanteID) => {
    console.log('Id da estante', estanteID);
    console.log('seu livro:' ,selectedBookInfo.volumeInfo)
    try {
      // Enviar solicitação à API para adicionar o livro à estante
      await Axios.post('http://localhost:3000/adicionarLivroAEstante', {
        livro: selectedBookInfo, // Envie o livro selecionado
        estanteID: estanteID,
=======
  const listEstantes = () => {
    handleOpenListEstantesModal();
  };
  const handleAddToEstante = async (estanteNome) => {
    try {
      // Enviar solicitação à API para adicionar o livro à estante
      await Axios.post('http://localhost:3000/adicionarLivroAEstante', {
        livro: selectedBook, // Envie o livro selecionado
        estanteNome: estanteNome,
      });
  
      // Fechar o modal de estantes após adicionar o livro
      handleCloseListEstantesModal();
  
      // Exibir uma mensagem de sucesso ou atualizar a interface de acordo
      console.log(`Livro adicionado à estante: ${estanteNome}`);
    } catch (error) {
      console.error('Erro ao adicionar livro à estante', error);
    }
  };

  useEffect(() => {
    // Carregar as estantes quando o componente montar
    handleOpenListEstantesModal();
  }, []); // A dependência vazia garante que este efeito só é executado uma vez, ao montar o componente

  return (
    <>
        <HeaderBar/>
        <NavBarMenu/>
        <div className={style.resultados}>
            <h2>Resultados</h2>
            <div className={style.livros}>
                {books.map((book) => (
                <div className={style.livro} key={book.id}>
                    <img
                    src={book.volumeInfo?.imageLinks?.thumbnail || placeholder}
                    alt={book.volumeInfo?.title || 'Título não disponível'}
                    style={imageStyle}
                    />

                    {/* <h3 className={style.title}>{book.volumeInfo?.title || 'Título não disponível'}</h3> */}
                    <div className={style.buttons}>
                    <Button style={btn} onClick={() => modalAddOpen(book)}>

                    <h3>{book.volumeInfo?.title || 'Título não disponível'}</h3>
                    <Button style={btn} onClick={handleOpenListEstantesModal}>

                      Adicionar
                    </Button>
                    <Button style={btn} onClick={() => handleOpen(book)}>
                      Ver Detalhes
                    </Button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>

        {/* Modal */}
      <Modal
        open={selectedBook !== null}
        onClose={handleClose}
        closeAfterTransition
        style={modalStyle}
      >
        <Fade in={selectedBook !== null}>
          <div className={style.cardStyle}>
            {selectedBook && (
              <Card>
                <CardMedia
                  component="img"
                  alt={selectedBook.volumeInfo?.title || 'Título não disponível'}
                  width="190"
                  height="200"
                  image={selectedBook.volumeInfo?.imageLinks?.thumbnail || placeholder}
                />
                <CardContent>
                  <Typography variant="h5">
                    {selectedBook.volumeInfo?.title || 'Título não disponível'}
                  </Typography>
                  <Typography variant="subtitle1">
                    Autor: {selectedBook.volumeInfo?.authors?.join(', ') || 'Autor não disponível'}
                  </Typography>
                  <Typography variant="body1">
                    {selectedBook.volumeInfo?.description || 'Descrição não disponível'}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </div>
        </Fade>
      </Modal>

      {/* ADD ESTANTE */}
      <Modal
        open={isListEstantesModalOpen}
        onClose={handleCloseListEstantesModal}
        closeAfterTransition
        style={modalStyle}
      >
        <Fade in={isListEstantesModalOpen}>
          <div className={style.cardStyle}>
            {/* Conteúdo do modal para listEstantes */}
            <Card>
              <CardContent>
                <Typography variant="h5">
                  Estantes Disponíveis
                </Typography>
                {estantes.map(estante => (
                  <div key={estante.EstanteID} style={{ marginBottom: '5px'}}>
                  <Button
                    style={{ ...btn, width: '100%', height: '50px', fontSize:'1.2rem' }}

                    onClick={() => handleAddToEstante(estante.EstanteID)}>

                    onClick={() => handleAddToEstante(estante.EstanteID)}
                  >

                    {estante.NomeEstante}
                  </Button>

                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Fade>
      </Modal>
    </>
  )
}