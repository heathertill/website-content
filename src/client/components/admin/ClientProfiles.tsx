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
    });
    const [seoContent, setSeoContent] = useState<SEOContent>({
        knownFor: '',
        found: '',
        blog: '',
        socialMedia: '',
        emailCamp: '',
        emailService: ''
    });
    const [contact, setContact] = useState<Contact>({
        address: '',
        email: '',
        workPhone: '',
        otherPhone: '',
        linkedin: '',
        insta: '',
        facebook: '',
        otherSocial: ''
    });

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
                handleGet(`/api/aboutInfo/${e}`, setAbout);
                handleGet(`/api/seoContentInfo/${e}`, setSeoContent);
                handleGet(`/api/contactInfo/${e}`, setContact);
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
                        <h3>About Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">How they got started: {about.entryHistory}</div>
                            <div className="p-2 m-3">About the client: {about.aboutYou}</div>
                            <div className="p-2 m-3">Skills and experience: {about.expSkills}</div>
                            <div className="p-2 m-3">How to show portfolio: {about.portStyle}</div>
                            <div className="p-2 m-3">What to highlignt: {about.highlight}</div>
                            <div className="p-2 m-3">Qualification: {about.qualifications}</div>
                            <div className="p-2 m-3">Services and/or products: {about.serviceProd}</div>
                        </div>
                    </div>
                    <div>
                        <h3>SEO Content Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Know for: {seoContent.knownFor}</div>
                            <div className="p-2 m-3">How to be found: {seoContent.found}</div>
                            <div className="p-2 m-3">Blog: {seoContent.blog}</div>
                            <div className="p-2 m-3">Maintain social media? Who? {seoContent.socialMedia}</div>
                            <div className="p-2 m-3">Current email service? {seoContent.emailService}</div>
                            <div className="p-2 m-3">Active email campaign? {seoContent.emailCamp}</div>
                        </div>
                    </div>
                    <div>
                        <h3>Contact Info</h3>
                        <div className="border my-3">
                            <div className="p-2 m-3">Address: {contact.address}</div>
                            <div className="p-2 m-3">Email {contact.email}</div>
                            <div className="p-2 m-3">Work phone: {contact.workPhone}</div>
                            <div className="p-2 m-3">Other phone: {contact.otherPhone}</div>
                            <div className="p-2 m-3">Linkedin: {contact.linkedin}</div>
                            <div className="p-2 m-3">Instagram: {contact.insta}</div>
                            <div className="p-2 m-3">Facebook {contact.facebook}</div>
                            <div className="p-2 m-3">Other social media: {contact.otherSocial}</div>
                        </div>
                    </div>
                </div>

                : null}


        </div>
    );
}

export default ClientProfiles;