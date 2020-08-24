import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../utils/api'

export interface CallToActionProps { }

const CallToAction: React.SFC<CallToActionProps> = () => {
    return (
        <div>
            <h1>Click here to get started!</h1>
            <Link to={'/NewClient'} className="btn btn-warning m-2">New Client Forms</Link>
        </div>
    );
}

export default CallToAction;