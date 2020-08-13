import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import ClientInfo from './components/public/ClientInfo';
import Navbar from './components/shared/Navbar';
import Jumbo from './components/shared/Jumbo';
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import Home from './components/public/Home';
import SiteInfo from './components/public/SiteInfo';


const App: React.SFC<AppProps> = () => {

    return ( 
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/Jumbo' component={Jumbo} />
                    <Route exact path='/ClientInfo' component={ClientInfo} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Register' component={Register} />
                    <Route exact path='/SiteInfo' component={SiteInfo} />
                </Switch>
        </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps {}