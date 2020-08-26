import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../components/public/LandingInfo';
import ClientInfo from '../components/public/ClientInfo';
import SiteInfo from '../components/public/SiteInfo';
import BrandInfo from '../components/public/BrandInfo';
import StyleInfo from '../components/public/StyleInfo';
import LandingInfo from '../components/public/LandingInfo';
import CallToAction from '../components/public/CallToAction';
import AboutInfo from '../components/public/AboutInfo';

const NewForms: React.SFC<NewFormsProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/ClientInfo' component={ClientInfo} />
                <Route exact path='/SiteInfo' component={SiteInfo} />
                <Route exact path='/BrandInfo' component={BrandInfo} />
                <Route exact path='/StyleInfo' component={StyleInfo} />
                <Route exact path='/LandingInfo' component={LandingInfo} />
                {/* <Route exact path='/PortfolioInfo' component={PortfolioInfo} /> */}
                <Route exact path='/AboutInfo' component={AboutInfo} />
            </Switch>
        </BrowserRouter>

    );
}

export default NewForms;

export interface NewFormsProps { }