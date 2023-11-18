import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './EstanteModel.module.css';


export default function EstanteModel() {
  const [estantes, setEstantes] = useState([]);

  useEffect(() => {
    // Função para buscar estantes no back-end
    const fetchEstantes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/estantes'); 
        setEstantes(response.data);
      } catch (error) {
        console.error('Erro ao buscar estantes:', error);
      }
    };

    // Chama a função para buscar estantes quando o componente for montado
    fetchEstantes();


    const intervalId = setInterval(fetchEstantes, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval (intervalId);
  }, []); // O segundo parâmetro vazio faz com que a função seja executada apenas uma vez, quando o componente é montado

  const fetchLivros = async (estanteID) => {
    try {
      const response = await axios.get(`http://localhost:3000/livrosEstante/${estanteID}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar livros da estante ${estanteId}:`, error);
      return [];
    }
  };

  const [livros, setLivros] = useState({});

  useEffect(() => {
    // Buscar livros para cada estante
    const fetchLivrosForEstantes = async () => {
      const livrosData = {};
      for (const estante of estantes) {
        const livrosDaEstante = await fetchLivros(estante.EstanteID);
        livrosData[estante.EstanteID] = livrosDaEstante;
      }
      setLivros(livrosData);
    };

    // Executar a busca de livros quando as estantes forem carregadas
    if (estantes.length > 0) {
      fetchLivrosForEstantes();
    }
  }, [estantes]);

  return (
    <div>
      {estantes.map((estante) => (
        <div key={estante.EstanteID} className={styles.estante}>
          <h3>{estante.NomeEstante}</h3>
          <div className={styles.scrollLivros}>
            {/* Aqui você precisaria adicionar a lógica para carregar e exibir os livros da estante */}
            {livros[estante.EstanteID]?.map((livro) => (
              <div key={livro.LivroID} className={styles.livro}>
                <img src={livro.img} alt=""/>
                <h4>{livro.Titulo}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
