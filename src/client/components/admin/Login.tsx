import * as React from 'react';
import { useState } from 'react';
import { json, SetAccessToken, ClearAccessToken, User } from '../../utils/api';
import { RouteComponentProps, Link } from 'react-router-dom';

export interface LoginProps extends RouteComponentProps { }

const Login: React.SFC<LoginProps> = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logStatus, setLogStatus] = useState(true);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('logStat', logStatus);
        e.preventDefault();
        let body = {
            email,
            password
        }
        try {
            let result = await json('/auth/login', 'POST', body)
            if (result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role })
                if (result.role) {
                    setLogStatus(true);
                    history.push('/');
                    console.log('logStat2', logStatus)
                    location.reload();
                }
            } else {
                setLogStatus(false);
                ClearAccessToken();
            }
        } catch (e) {
            console.log(e)
        }
    };

    const loginError = () => {
        if (!logStatus) {
            return (
                <>
                    <div className="alert alert-danger p-1 m-3">
                        <div className="m-3">Invalid Credentials</div>
                        <button className="btn btn-outline-danger m-3" onClick={(e: React.MouseEvent<HTMLButtonElement>) => location.reload()} >Try Again</button>
                    </div>
                </>
            )
        }
    }

    return (
        <section>
            <form className="form-group border shadow p-3"
                onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} className="form-control"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <button type="submit" className="btn btn-warning my-3">Login</button>
                {loginError()}
            </form>
        </section>
    );
}

export default Login;