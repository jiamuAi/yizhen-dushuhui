import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Huangdineijing from './Huangdineijing'
import KongLao from './KongLao'

const App = () => {
  return (
    <Routes>
      <Route path="/huangdineijing" element={<Huangdineijing />} />
      <Route path="/konglao" element={<KongLao />} />
    </Routes>
  );
};

export default App;