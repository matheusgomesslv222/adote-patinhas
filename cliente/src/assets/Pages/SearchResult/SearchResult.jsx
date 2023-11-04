import React, {useState, useEffect} from 'react';
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
import { useLocation } from 'react-router-dom';

const imageStyle = {
    width: '160px', // Largura desejada
    height: '200px', // Altura desejada
};

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export default function SearchResult() {
  const { searchResults : books} = useSearch();
  const [ selectedBook , setSelectedBook] = useState(null)

  const handleOpen = (book) =>{
    setSelectedBook(book);
  };

  const handleClose = () =>{
    setSelectedBook(null)
  }

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
                    <h3>{book.volumeInfo?.title || 'Título não disponível'}</h3>
                    <Button variant="outlined" color="primary" onClick={() => handleOpen(book)}>
                      Ver Detalhes
                    </Button>
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
    </>
  )
}
