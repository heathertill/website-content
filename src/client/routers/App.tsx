import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import '../scss/app';

import ClientInfo from '../components/public/ClientInfo';
import Navbar from '../components/shared/Navbar';
import Jumbo from '../components/shared/Jumbo';
import Login from '../components/admin/Login';
import Register from '../components/admin/Register';
import NewClient from '../components/public/NewClient';
import SiteInfo from '../components/public/SiteInfo';
import BrandInfo from '../components/public/BrandInfo';
import ClientInfoEdit from '../components/edit/ClientInfoEdit';
import SiteInfoEdit from '../components/edit/SiteInfoEdit';
import BrandInfoEdit from '../components/edit/BrandInfoEdit';
import LandingPage from '../components/public/LandingPage';

import NewForms from 


const App: React.SFC<AppProps> = () => {

    return ( 
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/Jumbo' component={Jumbo} />
                    {/* <Route exact path='/ClientInfo' component={ClientInfo} /> */}
                    <Route exact path='/NewClient' component={NewClient} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Register' component={Register} />
                    {/* <Route exact path='/SiteInfo' component={SiteInfo} /> */}
                    {/* <Route exact path='/BrandInfo' component={BrandInfo} /> */}
                    <Route exact path='/ClientInfoEdit' component={ClientInfoEdit} />
                    <Route exact path='/SiteInfoEdit' component={SiteInfoEdit} />
                    <Route exact path='/BrandInfoEdit' component={BrandInfoEdit} />
                    <Route exact path='/' component={LandingPage} />
                </Switch>
        </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps {}