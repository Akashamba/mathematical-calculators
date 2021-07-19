import React from 'react'
import Homepage from './pages/homepage/homepage.component.jsx'
import Quadratic from './pages/quadratic-roots/quadratic.component.jsx'
import GCD from './pages/gcd/gcd.component.jsx'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/quadratic-equation-root" component={Quadratic}/>
        <Route exact path="/gcd" component={GCD}/>
      </Switch>
    </div>
  );
}

export default App;
