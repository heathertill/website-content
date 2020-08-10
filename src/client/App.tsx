import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import Form from './components/shared/Form';
import Navbar from './components/shared/Navbar';
import Jumbo from './components/shared/Jumbo';
import Login from './components/admin/Login';


const App: React.SFC<AppProps> = () => {

    return ( 
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/jumbo' component={Jumbo} />
                    <Route exact path='/' component={Form} />
                    <Route exact path='/login' component={Login} />
                </Switch>
        </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps {}