import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';

const routing =(<Router>
  <div>
    <ul>
    <li>
  <NavLink to="/Home">Home</NavLink>
</li>
      <li>
        <NavLink to ="/App">ContactUS</NavLink>
        
      </li>

    </ul>
    <Switch>
      <Route path='/Home' component={Home}></Route>
      <Route path='/App' component={App}></Route>
    </Switch>
  </div>
</Router>)
ReactDOM.render(routing,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
