import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Main_Reducer } from './reducers/main_reducer'
import './index.css';
import App from './App';
import { Provider } from "react-redux";

const store = createStore(Main_Reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
);

