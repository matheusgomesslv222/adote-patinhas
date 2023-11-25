import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';

import styles from './NavBarMenu.module.css';
import SearchBooks from '../SearchBooks/SearchBooks'


export default function NavBarMenu() {
  

  return (
    <div>
      <AppBar  position="static" sx={
        {   
            display: 'flex',
            justifyContent: 'center',
            height: 50, 
            backgroundColor : 'white',
        }}>
      <Toolbar className={styles.Toolbar}>
        <SearchBooks />
      </Toolbar>
    </AppBar>
    </div>
    
  )
}

