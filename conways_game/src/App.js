import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
