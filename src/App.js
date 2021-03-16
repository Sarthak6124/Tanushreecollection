import React,{Component} from 'react';
import './App.css';
import {Route} from 'react-router'
import login from './components/login/login'
import dashboard from './components/dashboard/dashboard';
import billing from  '../src/components/billing/billing';
import warehouse from './components/warehouse/warehouse';
import sidebar from '../src/layout/sidebar/sidebar';

class  App extends Component  {
  render(){
  return (
<body>
<div>

<Route exact path="/" component={login} ></Route>
<Route  path="/billing" component={billing} ></Route>
<Route  path="/warehouse" component={warehouse} ></Route>
<Route  path="/" component={sidebar} ></Route>
<Route path="/dashboard" component={dashboard} ></Route>

</div>
</body> );
  }
}

export default App;
