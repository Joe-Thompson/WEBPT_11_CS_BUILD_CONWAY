import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './new_landing_css.css';
import Dashboard from "./components/Dashboard";
import Nav from "./components/nav";
import About from "./components/about";
import Title from "./components/title";
import Preset_Comp from "./components/preset_comp";
import New_Landing from "./components/new_landing";

function App() {
  return (
    <div className="App">
        <Nav />
        <Route exact path='/' component={Title} />
        <Route exact path='/' component={New_Landing} />
        <Route exact path='/presets' component={Preset_Comp} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
