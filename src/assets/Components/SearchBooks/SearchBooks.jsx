import { useState} from 'react';
import {InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import styles from './SearchBooks.module.css';
import { useSearch } from '../../../SearchContext'; // Importe o hook useSearch
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SearchBooks() {
  const {searchResults , setSearchResults} = useSearch()
  const [query, setQuery] = useState('');
  const navigate = useNavigate()


  async function searchBooks() {
    if (!query) return //verifica consulta vazia
    // Pesquisa
    const apiKey = 'AIzaSyDMWdsaQum9jNpDlIdokQk1ezfDcyvpqpM'; // Substitua pela sua chave de API
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=40`;
    
    try {
        const response = await axios.get(apiUrl);
        const books = response.data.items;
        console.log('seu resultado', books)
        setSearchResults(books)
        navigate('/results')
      } catch (error) {
        console.error('Erro ao chamar a API do GOOGLE BOOKS', error);
      }
  }
  return (
    <>
    <div className={styles.searchBar}>
            <div className={styles.user}>
                <Button>
                  <a href="#">
                    <PersonIcon />
                  </a>
                </Button>
            </div>
            <div className={styles.pesquisa}>
            <InputBase
              className={styles.inputBase}
              type="text"
              name="search"
              id="search"
              placeholder="Pesquise um Livro"
              value={query}
              onChange={(e) => setQuery(e.target.value)} //atualiza o estado de consultas
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  searchBooks();
                }
              }}
            />
            <button className={styles.btnSearch} onClick={searchBooks}><SearchIcon/></button>
            </div>
          
         </div>{/* searchBar */}
    </>
  )
}
