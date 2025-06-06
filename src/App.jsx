import React from 'react';
import './App.css';


import { Route, Routes } from 'react-router';

import Contents from './components/body/Contents';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import FindId from './pages/find-id/FindId';
import FindIdCommonForm from './pages/find-id/FindIdCommonForm';
import FindIdVerificationCode from './pages/find-id/FindIdVerificationCode';
import FindIdCompleted from './pages/find-id/FindIdCompleted';
import MainContent from './components/body/MainContent';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Contents />}>
          <Route path="" element={<MainContent />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-id" element={<FindIdCommonForm />}>
            <Route path="" element={<FindId />} />
            <Route path="verification-code" element={<FindIdVerificationCode />} />
            <Route path="completed" element={<FindIdCompleted />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
