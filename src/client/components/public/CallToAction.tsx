import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../utils/api'

export interface CallToActionProps { }

const CallToAction: React.SFC<CallToActionProps> = () => {
    return (
        <div>
            <div>
                <h1>Welcome to my website.  Please look around and have fun!!!</h1>
</div>

            <h3>Click here to get started!</h3>
            <Link to={'/NewClient'} className="btn btn-warning m-2">New Client Forms</Link>
        </div>
    );
}

export default CallToAction;