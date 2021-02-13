import React from 'react'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FaqSection from './component/FaqSection';
import GlobalStyle from './component/GlobalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <AboutUs />
      <Services />
      <FaqSection />
    </>
  );
}

export default App;
