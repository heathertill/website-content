import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './scss/app';

import Form from './components/shared/Form'


const App: React.SFC<AppProps> = () => {
    return ( 
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path='/form' component={Form} />
                </Switch>
        </main>
        </BrowserRouter>
     );
}
 
export default App;