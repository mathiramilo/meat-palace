import React from 'react';
// Import Components
import { Navbar } from './components/layout/navbar/Navbar';
import { Footer } from './components/layout/footer/Footer';
// Import css
import './styles/styles.ts';

function App() {
  return (
    <div className="App">
      <Navbar />
        
      <Footer />
    </div>
  );
}

export default App;
