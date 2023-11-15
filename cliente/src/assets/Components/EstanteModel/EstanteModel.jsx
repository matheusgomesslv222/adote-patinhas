import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './EstanteModel.module.css';

export default function EstanteModel() {
  const [estantes, setEstantes] = useState([]);

  useEffect(() => {
    // Função para buscar estantes no back-end
    const fetchEstantes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/estantes'); // Substitua pela sua rota real
        setEstantes(response.data);
      } catch (error) {
        console.error('Erro ao buscar estantes:', error);
      }
    };

    // Chama a função para buscar estantes quando o componente for montado
    fetchEstantes();
    // Configura um intervalo para buscar estantes a cada, por exemplo, 30 segundos
    const intervalId = setInterval(fetchEstantes, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O segundo parâmetro vazio faz com que a função seja executada apenas uma vez, quando o componente é montado

  return (
    <div>
      {estantes.map((estante) => (
        <div key={estante.EstanteID} className={styles.estante}>
          <h3>{estante.NomeEstante}</h3>
          <div className={styles.scrollLivros}>
            {/* Aqui você precisaria adicionar a lógica para carregar e exibir os livros da estante */}
            <div className={styles.livro}>
              <img src="https://placehold.co/160x200" alt="" />
              <h4>Título</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
