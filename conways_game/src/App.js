import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Nav from "./components/nav";
import About from "./components/about";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
        <Nav />
        <Route exact path='/' component={Title} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
