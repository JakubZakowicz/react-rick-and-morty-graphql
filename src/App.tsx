import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
