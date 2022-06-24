import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import Character from './pages/Character';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
