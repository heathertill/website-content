import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../../utils/api';
import { wayToGo } from '../../utils/formService';
import SubmitEdit from '../../utils/submitEdit';


export interface ClientInfoProps extends RouteComponentProps<{ id: string }> { }

const ClientInfo: React.SFC<ClientInfoProps> = ({ history, match: { params: { id } } }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workNumber, setWorkNumber] = useState('');
    const [cellNumber, setCellNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let client = await json(`/api/clientInfo/${User.userid}`)
                if (client !== null) {
                    setIsEditable(true);
                    setFirstName(client.firstName);
                    setLastName(client.lastName);
                    setWorkNumber(client.workNumber);
                    setCellNumber(client.cellNumber);
                    setEmail(client.email);
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => { canEdit() }, [])

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
        if (isEditable === false) {
            try {
                let newInfo = await json('/api/clientInfo', 'POST', body)
                if (newInfo) {
                    history.push('/NewClient');
                    location.reload();
                }
            } catch (e) {
                console.log(e)
            }
        }
        else {
            try {
                let editInfo = await json(`/api/clientInfo/${User.userid}`, 'PUT', body)
                if (editInfo) {
                    wayToGo('Client info has been edited!')
                    history.push('/');
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
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
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default ClientInfo;