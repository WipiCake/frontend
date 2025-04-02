import React from 'react';
import HeaderPage from './components/Main/Header';
import MainContent from './components/Main/Main';
import FooterPage from './components/Main/Footer';
import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Main/Footer';
import MainPage from './page/MainPage';
import Header from './components/Main/Header';
import SignUpPage from './page/SignUpPage';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
