import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import '../scss/app';

import Navbar from '../components/shared/Navbar';
import Jumbo from '../components/shared/Jumbo';
import Login from '../components/admin/Login';
import Register from '../components/admin/Register';
import NewClient from '../components/public/NewClient';
import CallToAction from '../components/public/CallToAction';
import ClientProfiles from '../components/admin/ClientProfiles';


import NewForms from './NewForms';


const App: React.SFC<AppProps> = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/Jumbo' component={Jumbo} />
                    <Route exact path='/NewClient' component={NewClient} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Register' component={Register} />
                    <Route exact path='/' component={CallToAction} />
                    <Route exact path='/ClientProfiles' component={ClientProfiles} />
                    <NewForms />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }