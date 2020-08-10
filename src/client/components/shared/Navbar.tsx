import * as React from 'react';
import { Link } from 'react-router-dom';
import { User, ClearAccessToken } from '../../utils/api';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {

    const showLogin = () => {
        if (User.userid !== null) {
            return <button className="text-white bg-dark border-dark" onClick={() => logout()}>Logout</button>
        } else if (User.userid === null) {
            return <Link className="text-white mx-3" to='/login'>Login</Link>
        }
    }

    const logout = () => {
        location.replace('/books')
        // location.reload();
        ClearAccessToken();
        
    }

    return (
        <section>
            <ul className="nav bg-dark my-3 p-2 justify-content-between">
                <div className="nav">
                    <li className="nav-item">
                        {showLogin()}
                    </li>
                    <li className="nav-item">
                        <Link className="text-white mx-3" to='/books'>Books</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="text-white mx-3" to='/new'>Add Book</Link>
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