import * as React from 'react';
import { useState } from 'react';
import { json, SetAccessToken, ClearAccessToken } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom'

export interface RegisterProps extends RouteComponentProps { }

const Register: React.SFC<RegisterProps> = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(null);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let body = {
            email,
            password
        }
        try {
            let r = await json('/auth/register', 'POST', body);
            if (r) {
                let result = await json('/auth/login', 'POST', body);
                if (result) {
                    SetAccessToken(result.token, { userid: result.userid, role: result.role })
                    history.push('/books')
                } else {
                    setRegistered(false);
                    ClearAccessToken();
                }
            } else {
                setRegistered(false);
            }
        } catch (e) {
            console.log(e)
        }
    };

    const registrationError = () => {
        if (registered === false) {
            return <div className="alert">There was a problem registering! Please try again.</div>
        }
    }


    return (
        <section>
        <form className="form-group border shadow p-3"
            onSubmit={(e) => handleRegister(e)}>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} className="form-control"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} className="form-control"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            <button type="submit" className="btn btn-warning my-3">Login</button>
            {registrationError()}
        </form>
    </section>
    );
}

export default Register;