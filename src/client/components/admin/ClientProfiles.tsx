import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { handleGet } from '../../utils/formService';
import { json } from '../../utils/api';
import { Client, Site, Brand, Style, Landing, About, SEOContent, Contact } from '../../utils/objectTypes';
import { updateSetAccessor } from 'typescript';

export interface ClientProfilesProps extends RouteComponentProps { }



const ClientProfiles: React.SFC<ClientProfilesProps> = () => {

    const [clients, setClients] = useState<Client[]>([]);
    const [client, setClient] = useState<Client>();
    const [site, setSite] = useState<Site>({
        webName: '',
        hostName: '',
        domain: '',
        siteManager: '',
        updateFreq: '',
        budget: '',
        completion: ''
    });
    const [brand, setBrand] = useState<Brand>({
        purpose: '',
        audience: '',
        competition: '',
        siteAction: '',
        tagLine: '',
        greatness: ''
    });
    const [style, setStyle] = useState<Style>({
        logo: '',
        style: '',
        color: '',
        standards: '',
        printMaterials: '',
        fonts: '',
        photoService: '',
        websites: '',
        webLikesDis: '',
        features: ''
    });
    const [landing, setLanding] = useState<Landing>({
        siteEntry: '',
        branding: '',
        callToAction: '',
        simWebFunc: ''
    });
    const [about, setAbout] = useState<About>({
        entryHistory: '',
        aboutYou: '',
        expSkills: '',
        portStyle: '',
        highlight: '',
        qualifications: '',
        serviceProd: ''
    })

    const [show, setShow] = useState(false);



    const getClient = async (e: any) => {
        try {
            let client = await json(`/api/clientInfo/${e}`);
            if (client) {
                setClient(client)
                setShow(true)
                handleGet(`/api/siteInfo/${e}`, setSite);
                handleGet(`/api/brandInfo/${e}`, setBrand);
                handleGet(`/api/styleInfo/${e}`, setStyle);
                handleGet(`/api/landingInfo/${e}`, setLanding);
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
                    <div>
                        <h3>Brand Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Purpose website: {brand.purpose}</div>
                            <div className="p-2 m-3">Audience {brand.audience}</div>
                            <div className="p-2 m-3">Competition: {brand.competition}</div>
                            <div className="p-2 m-3">Website interaction with user: {brand.siteAction}</div>
                            <div className="p-2 m-3">Tagline: {brand.tagLine}</div>
                            <div className="p-2 m-3">What is great about the business: {brand.greatness}</div>
                        </div>
                    </div>
                    <div>
                        <h3>StyleInfo</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Logo: {style.logo}</div>
                            <div className="p-2 m-3">Style: {style.style}</div>
                            <div className="p-2 m-3">Color palatte: {style.color}</div>
                            <div className="p-2 m-3">Brand standards: {style.standards}</div>
                            <div className="p-2 m-3">Print materials: {style.printMaterials}</div>
                            <div className="p-2 m-3">Fonts: {style.fonts}</div>
                            <div className="p-2 m-3">Photo services {style.photoService}</div>
                            <div className="p-2 m-3">Websites for inspiration: {style.websites}</div>
                            <div className="p-2 m-3">Likes and dislikes of these sites: {style.webLikesDis}</div>
                            <div className="p-2 m-3">Features wanted in website: {style.features}</div>
                        </div>
                    </div>
                    <div>
                        <h3>Landing Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Site entry: {landing.siteEntry}</div>
                            <div className="p-2 m-3">Branding images: {landing.branding}</div>
                            <div className="p-2 m-3">Call to action: {landing.callToAction}</div>
                            <div className="p-2 m-3">Website navigation liked: {landing.simWebFunc}</div>
                        </div>
                    </div>
                    <div>
                        <h3></h3>
                        <div className="border my-3">
                            <div className="p-2 m-3"> {}</div>
                            <div className="p-2 m-3"> {}</div>
                            <div className="p-2 m-3"> {}</div>
                            <div className="p-2 m-3"> {}</div>
                        </div>
                    </div>

                </div>

                : null}

            {/* <div>
                <h3></h3>
                <div className="border my-3">
                    <div className="p-2 m-3"> {}</div>
                    <div className="p-2 m-3"> {}</div>
                    <div className="p-2 m-3"> {}</div>
                    <div className="p-2 m-3"> {}</div>
                </div>
            </div> */}
        </div>
    );
}

export default ClientProfiles;