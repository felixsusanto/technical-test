import React from 'react';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: #2D2D2D;
    margin: 0;
    padding: 0;
    background: #eee;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
