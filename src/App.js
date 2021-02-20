import React from 'react'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FaqSection from './component/FaqSection';
import Nav from "./component/Nav";
import GlobalStyle from './component/GlobalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutUs />
      <Services />
      <FaqSection />
    </>
  );
}

export default App;
