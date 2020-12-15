import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './assets/main.css';
//reduxer
import {Provider} from 'react-redux';
import store from './data/store';


//Components
import NavBar from './components/navbar/navbar.component';
import Register from './screens/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <NavBar />
    <ToastContainer />
    <Switch>
      <Route exact path='/'component={App}/>
      <Route exact path='/register'component={Register}/>
    </Switch>
    </BrowserRouter>
    <App />
  </Provider>,
  document.getElementById('root')
);

