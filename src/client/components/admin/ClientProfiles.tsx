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
    const [site, setSite] = useState<Site>({
        webName: '',
        hostName: '',
        domain: '',
        siteManager: '',
        updateFreq: ''
    });
    const [show, setShow] = useState(false);



    const getClient = async (e: any) => {
        try {
            let client = await json(`/api/clientInfo/${e}`);
            if (client) {
                setClient(client)
                setShow(true)
                handleGet(`/api/siteInfo/${e}`, setSite)
            }
        } catch (e) {
            console.log(e)
        }
    }






    useEffect(() => { handleGet('/api/clientInfo', setClients) }, [])

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
            <h2>Client Profile</h2>
            {show ?
                <div>
                    <div>
                        <h3>Client Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Name: {client.firstName} {client.lastName}</div>
                            {/* <div className="border p-2 m-3">Last Name: {client.}</div> */}
                            <div className="p-2 m-3">Work number: {client.workNumber}</div>
                            <div className="p-2 m-3">Cell number: {client.cellNumber}</div>
                            <div className="p-2 m-3">email: {client.email}</div>
                        </div>
                    </div>
                    <div>
                        <h3>Site Info</h3>
                        <div className="border my-3">
                        <div className="p-2 m-3">Existing Website: {site.webName}</div>
                        <div className="p-2 m-3">Hosting Service: {site.hostName}</div>
                        <div className="p-2 m-3">Domain Name: {site.domain}</div>
                        <div className="p-2 m-3">Website Manager: {site.siteManager}</div>
                        <div className="p-2 m-3">Update Frequency: {site.updateFreq}</div>
                        </div>
                    </div>
                </div>

                : null}


        </div>
    );
}

export default ClientProfiles;