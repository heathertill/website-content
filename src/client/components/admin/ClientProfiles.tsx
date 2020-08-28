import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { handleGet } from '../../utils/formService';
import { json } from '../../utils/api';
import { Client, About, Brand, Site } from '../../utils/objectTypes';

export interface ClientProfilesProps extends RouteComponentProps { }



const ClientProfiles: React.SFC<ClientProfilesProps> = () => {

    const [clients, setClients] = useState<Client[]>([]);
    const [client, setClient] = useState<Client>();
    const [site, setSite] = useState<Site[]>()
    const [show, setShow] = useState(false);



    const getClient = async (e: any) => {
        try {
            let client = await json(`/api/clientInfo/${e}`);
            console.log('site1', site)
            if (client) {
                setClient(client)
                setShow(true)
                let getSite = handleGet(`/api/siteInfo/${e}`, setSite)
                console.log('test', site)
                console.log('site2', site)

                console.log('site', site)
                console.log('client', client)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const testFunc = () => {
        let getSite = handleGet('/api/siteInfo/2', setSite)
        console.log('site', site)
    }


    useEffect(() => { handleGet('/api/clientInfo', setClients), testFunc }, [])

    return (
        <div>
            <div className="form-inline row m-2">
                <select className="form-control col"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => getClient(e.target.value)}>
                    <option>Select a Client</option>
                    {clients.map(client => {
                        return (
                            <option key={client.userid} value={client.userid}>{client.firstName}</option>
                        )
                    })}
                </select>
            </div>
            <h2>Client Info</h2>
            {show ?
                <div className="border my-3">
                    <div className="p-2 m-3">Name: {client.firstName} {client.lastName}</div>
                    {/* <div className="border p-2 m-3">Last Name: {client.}</div> */}
                    <div className="p-2 m-3">Work number: {client.workNumber}</div>
                    <div className="p-2 m-3">Cell number: {client.cellNumber}</div>
                    <div className="p-2 m-3">email: {client.email}</div>
                </div>
                : null}


        </div>
    );
}

export default ClientProfiles;