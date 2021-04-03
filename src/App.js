import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutUs from './pages/AboutUs';
import OurWok from './pages/OurWork';
import ConatctUs from './pages/ContactUs';
import Nav from "./component/Nav";
import GlobalStyle from './component/GlobalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work">
          <OurWok />
        </Route>

        <Route path="/contact">
          <ConatctUs />
        </Route>
      </Switch>

    </>
  );
}

export default App;
