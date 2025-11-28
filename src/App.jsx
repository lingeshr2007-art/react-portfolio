import React from 'react';

import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Body from './Pages/Body';
import Footer from './Components/Footer/Footer';

// ⬇ Import the particles component
import { BackgroundAnimations } from "./Components/Background";
import MouseEffect from "./Components/MouseEffect";

function App() {
  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimations />
      <MouseEffect />

      {/* Main Portfolio Content */}
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;