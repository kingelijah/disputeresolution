import React, { Component} from 'react';
import './App.css';
//import Register  from './components/authentication/register';
//import Login  from './components/authentication/login';
import Login  from './components/authentication/login';
import Overview  from './components/dashboards/overview';
import Disputes  from './components/dashboards/disputes';
import Users  from './components/dashboards/manageuser';
import AssignDisputes  from './components/dashboards/assigndisputes';
import Accountsettings  from './components/dashboards/accountsettings';
import Logs  from './components/dashboards/logs';
import ResolvedDisputes  from './components/dashboards/systemresolveddisputes';
import Reconpage  from './components/dashboards/reconpage';
import Agent  from './components/dashboards/agentpage';
import Register  from './components/dashboards/RegisterUser';
import Teams  from './components/dashboards/teams';
import Process  from './components/dashboards/process';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';
import Navbars from './components/dashboards/navbar';
import Axios from 'axios';


export default class App extends Component {
  state = {};
  componentDidMount = () => {
    const config = {
      headers:{
        Authorization: 'Bearer' + localStorage.getItem('token'),
      }
    }
    Axios.get('users',config)
    .then( res => {
       this.setState({
         user: res.data
       });
    })
    .catch()

  }

  render(){
  return (
    
<BrowserRouter  >
    <div className="App">
      <div className="chart">
      <Switch>
<Route exact path="/" component ={Login} />
<Route exact path="/Overview" component ={Overview} />
<Route exact path="/Teams" component ={Teams} />
<Route exact path="/Process" component ={Process} />
<Route exact path="/Register" component ={Register} />
<Route exact path="/Agent" component ={Agent} />
<Route exact path="/Reconpage" component ={Reconpage} />
<Route exact path="/Disputes" component ={Disputes} />
<Route exact path="/Assigndisputes" component ={AssignDisputes} />
<Route exact path="/Users" component ={Users} />
<Route exact path="/Accountsettings" component ={Accountsettings} />
<Route exact path="/ResolvedDisputes" component ={ResolvedDisputes} />
<Route exact path="/Logs" component ={Logs} />
      </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
};
}




