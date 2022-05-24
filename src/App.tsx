import React from 'react';
import { Navbar } from './components/layout/navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar isLandingPage={true} />
    </div>
  );
}

export default App;
