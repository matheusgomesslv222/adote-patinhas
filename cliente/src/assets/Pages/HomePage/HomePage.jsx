import { useState } from 'react'
import style from './HomePage.module.css'
import HeaderBar from '../../Components/HeaderBar/HeaderBar'
import NavBarMenu from '../../Components/NavBarMenu/NavBarMenu'
import EstanteModel from "../../Components/EstanteModel/EstanteModel";
import CreateShelf from '../../Components/CreateShelf/CreateShelf'

export default function HomePage() {
    const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) =>{
    setSearchResults(results);
  }
  return (
    <>  
    
        <HeaderBar />
        <NavBarMenu onSearchResults={updateSearchResults}/>
        <div className={style.main}>
            <CreateShelf />
            <EstanteModel />
        </div>
    </>
  )
}
