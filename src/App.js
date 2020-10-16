import React from 'react';
import './App.css';
//import Register  from './components/authentication/register';
//import Login  from './components/authentication/login';
import Login  from './components/authentication/login';
import Overview  from './components/dashboards/overview';
import Disputes  from './components/dashboards/disputes';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <div className="chart">
      <Switch>
<Route exact path="/Overview" component={Overview} />
<Route exact path="/" component ={Login} />
<Route exact path="/Disputes" component ={Disputes} />
      </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
