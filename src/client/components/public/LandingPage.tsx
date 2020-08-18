import * as React from 'react';
import { Link } from 'react-router-dom';

export interface LandingPageProps {

}

const LandingPage: React.SFC<LandingPageProps> = () => {
    return (
        <div>
            <h1>Click here to get started!</h1>
            <Link to={'/NewClient'} className="btn btn-warning m-2">New Client Forms</Link>
        </div>
    );
}

export default LandingPage;