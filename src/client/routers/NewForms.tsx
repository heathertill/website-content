import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../components/public/LandingPage';
import ClientInfo from '../components/public/ClientInfo';
import SiteInfo from '../components/public/SiteInfo';
import BrandInfo from '../components/public/BrandInfo';
import StyleInfo from '../components/public/StyleInfo';

const NewForms: React.SFC<NewFormsProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/ClientInfo' component={ClientInfo} />
                <Route exact path='/SiteInfo' component={SiteInfo} />
                <Route exact path='/BrandInfo' component={BrandInfo} />
                <Route exact path='/StyleInfo' component={StyleInfo} />
            </Switch>
        </BrowserRouter>

    );
}

export default NewForms;

export interface NewFormsProps { }