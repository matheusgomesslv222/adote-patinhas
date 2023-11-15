import React, { useState} from 'react'
import { Button, Modal, Fade, Card, CardContent, Typography, TextField } from '@mui/material';
import styles from './CreateShelf.module.css'
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';

export default function CreateShelf() {
  const [isAddShelfModalOpen, setAddShelfModalOpen] = useState(false);
  const [newShelfName, setNewShelfName] = useState('');

  const handleOpenAddShelfModal = () => {
    setAddShelfModalOpen(true);
  };

  const handleCloseAddShelfModal = () => {
    setAddShelfModalOpen(false);
  };

  const handleAddShelf = async () => {
    try {
      // Enviar a nova estante para o back-end
      await Axios.post('http://localhost:3000/estante', { nome: newShelfName });

      // Limpar o estado e fechar o modal após o sucesso
      setNewShelfName('');
      handleCloseAddShelfModal();
    } catch (error) {
      console.error('Erro ao adicionar estante:', error);
      // Tratar erro, se necessário
    }
  };
  return (
    <div className={styles.createShelf}>
        <h2>Minhas Estantes</h2>
        <button className={styles.addShelf} onClick={handleOpenAddShelfModal}><AddIcon/></button>
        {/* Modal para adicionar estante */}
      <Modal open={isAddShelfModalOpen} onClose={handleCloseAddShelfModal}>
        <Fade in={isAddShelfModalOpen}>
          <div>
            <Card>
              <CardContent>
                <Typography variant="h5">Nova Estante</Typography>
                <TextField
                  label="Nome da Estante"
                  variant="outlined"
                  value={newShelfName}
                  onChange={(e) => setNewShelfName(e.target.value)}
                />
                <Button onClick={handleAddShelf}>Adicionar</Button>
                <Button onClick={handleCloseAddShelfModal}>Cancelar</Button>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </Modal>
    </div>
    
  )
}
