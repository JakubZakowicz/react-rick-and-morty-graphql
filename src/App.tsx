import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Characters from './pages/Characters';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
