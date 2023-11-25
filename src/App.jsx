import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';
import { SearchProvider } from './SearchContext'
import HomePage from './assets/Pages/HomePage/HomePage'
import SearchResult from './assets/Pages/SearchResult/SearchResult';


function App() {

  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>
    </SearchProvider>
  )
}

export default App


/*
Criar a opção de criar estantes
  Criar a opção de armazenar livros na estante
  Deixar no esquema para integrar isso ao banco de dados

*/