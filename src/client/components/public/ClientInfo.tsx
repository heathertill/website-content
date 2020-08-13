import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../../utils/api';


export interface ClientInfoProps extends RouteComponentProps {
    
}

const ClientInfo: React.SFC<ClientInfoProps> = ({history}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workNumber, setWorkNumber] = useState('');
    const [cellNumber, setCellNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let body = {
            userid: User.userid,
            firstName,
            lastName,
            workNumber,
            cellNumber,
            email
        }
        e.preventDefault();
        try {
            let newInfo = await json('/api/clientInfo', 'POST', body)
            if (newInfo) {
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    };

    return ( 
        <section>
            <form className="form-group"
            onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" value={firstName} placeholder={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                <label htmlFor="lastName">Last Name</label>
                <input className="form-control" type="text" value={lastName} placeholder={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
                <label htmlFor="workNumber">Work Number</label>
                <input className="form-control" type="text" value={workNumber} placeholder={workNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkNumber(e.target.value)} />
                <label htmlFor="cellNumber">Cell Number</label>
                <input className="form-control" type="text" value={cellNumber} placeholder={cellNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCellNumber(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input className="form-control" type="text" value={email} placeholder={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <button type="submit" className="btn btn-warning m-2">Submit</button>
            </form>
        </section>
    );
}

export default ClientInfo;