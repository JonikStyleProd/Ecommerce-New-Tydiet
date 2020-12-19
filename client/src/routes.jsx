import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import NavBar from './components/navbar/navbar.component';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';

const Routes = () => {
    return (

            <BrowserRouter>
                <NavBar />
                <ToastContainer />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </BrowserRouter>

    );
};

export default Routes;
