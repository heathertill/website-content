import * as React from 'react';
import { Link } from 'react-router-dom';
import { User, ClearAccessToken } from '../../utils/api';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {

    const showLogin = () => {
        if (User.userid !== null) {
            return <button className="text-white bg-dark border-dark" onClick={() => logout()}>Logout</button>
        } else if (User.userid === null) {
            return <Link className="text-white mx-3" to='/login'>Login</Link>
        }
    }

    const showClientProfile = () => {
        if (User.role === 'admin') {
            return <Link className="text-white mx-3" to='/clientProfiles'>Client Profiles</Link>
        }
    }

    const logout = () => {
        location.replace('/');
        ClearAccessToken();
    }

    const handleFormSelect = (e: any) => {
        location.replace(e)
    }

    const editForms = () => {
        
    }

    return (
        <section>
            <ul className="nav bg-dark my-3 p-2 justify-content-between">
                <div className="nav">
                    <li className="nav-item">
                        {showLogin()}
                    </li>
                    <li className="nav-item">
                        {showClientProfile()}
                    </li>
                    <div>
                        <select name="" id="" className="form-control"
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFormSelect(e.target.value)}>
                            <option value="">Select a form</option>
                            <option value="clientInfo">Client Info</option>
                            <option value="siteInfo">Site Info</option>
                            <option value="brandInfo">Brand Info</option>
                            <option value="styleInfo">Style Info</option>
                            <option value="landingInfo">Landing Info</option>
                            <option value="portfolioInfo">Portfolio Info</option>
                        </select>
                    </div>
                    <li className="nav-item">
                        <Link className="text-white mx-3" to='/'>Landing Page</Link>
                    </li>
                </div>
                <li className="nav-item">
                    <Link className="text-white mx-3" to='/register'>Register</Link>
                </li>
            </ul>
        </section>
    );
}

export default Navbar;