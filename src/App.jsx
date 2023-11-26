import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';
import { SearchProvider } from './SearchContext'
import HomePage from './assets/Pages/HomePage/HomePage'
import SearchResult from './assets/Pages/SearchResult/SearchResult';
import RegisterPage from './assets/Pages/RegisterPage/RegisterPage';
import LoginPage from './assets/Pages/LoginPage/LoginPage'


function App() {

  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route path="book-mapper/" element={<RegisterPage />} />
        <Route path="book-mapper/login" element={<LoginPage />} />
        <Route path="book-mapper/home" element={<HomePage />} />
        <Route path="book-mapper/results" element={<SearchResult/>} />
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