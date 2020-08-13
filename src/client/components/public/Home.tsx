import * as React from 'react';
import { Link } from 'react-router-dom';

import ClientInfo from './ClientInfo';
import { RouteComponentProps } from 'react-router-dom';

export interface HomeProps extends RouteComponentProps<{ history }> { }

const Home: React.SFC<HomeProps> = () => {
    return (
        <section>
            <h1>Please complete the following forms</h1>
            <div>
                <Link to={'/ClientInfo'} className="btn btn-warning m-2">Client Info</Link>
            </div>
            <div>
                <Link to={'/SiteInfo'} className="btn btn-warning m-2">Site Info</Link>
            </div>
        </section>
    );
}

export default Home;