import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Season from './pages/Season';
import Episode from './pages/Episode';
import Locations from './pages/Locations';
import Location from './pages/Location';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/home-page" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/episodes/season/:season" element={<Season />} />
          <Route path="/episode/:id" element={<Episode />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/location/:id" element={<Location />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
