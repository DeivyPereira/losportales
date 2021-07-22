import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Logo } from './components/Logo';
import { Register } from './pages/register';
import { Thanks } from './pages/thanks';
import { Validate } from './pages/validate';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
  return (
    <Router>
    <div >
      <Logo />
      <GlobalStyle />
      <Switch>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/validate">
            <Validate />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
