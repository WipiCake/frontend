import React from 'react';
import HeaderPage from './components/Main/Header';
import MainContent from './components/Main/Main';
import FooterPage from './components/Main/Footer';
import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Main/Footer';
import MainPage from './page/MainPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
