import React from 'react';
// Import components
import { NavBar } from './components/layout/navbar/NavBar';
import { Footer } from './components/layout/footer/Footer';
// Import views
import { Home } from './views/home/Home';
// Import css
import './styles/styles.ts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
