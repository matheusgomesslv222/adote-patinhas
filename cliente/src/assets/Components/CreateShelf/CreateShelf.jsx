import React, { useState} from 'react'
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
import styles from './CreateShelf.module.css'
import AddIcon from '@mui/icons-material/Add';

export default function CreateShelf() {

  return (
    <div className={styles.createShelf}>
        <h2>Minhas Estantes</h2>
        <button className={styles.addShelf}><AddIcon/></button>
        
    </div>
  )
}
