import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";

import { Route, Routes } from 'react-router';
import MainHeader from './components/header/MainHeader';
import Contents from './components/body/Contents';
import Join from './pages/join/Join';
import Login from './pages/login/Login';


function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Contents />}>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
