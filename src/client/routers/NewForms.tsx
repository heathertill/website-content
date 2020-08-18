import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import ClientInfo from '../components/public/ClientInfo';
import SiteInfo from '../components/public/SiteInfo';
import BrandInfo from '../components/public/BrandInfo';

const NewForms: React.SFC<NewFormsProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/ClientInfo' component={ClientInfo} />
                <Route exact path='/SiteInfo' component={SiteInfo} />
                <Route exact path='/BrandInfo' component={BrandInfo} />
            </Switch>
        </BrowserRouter>

    );
}

export default NewForms;

export interface NewFormsProps { }