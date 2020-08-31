import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { handleGet } from '../../utils/formService';
import { json } from '../../utils/api';
import { Client, Site, Brand, Style, Landing, About, SEOContent, Contact } from '../../utils/objectTypes';

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
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Name:    </div>
                                <div className="d-inline ml-3">{client.firstName} {client.lastName}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Work number:    </div>
                                <div className="d-inline ml-3">{client.workNumber}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Cell number:    </div>
                                <div className="d-inline ml-3">{client.cellNumber}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Email:    </div>
                                <div className="d-inline ml-3">{client.email}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Site Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Existing website:</div>
                                <div className="d-inline ml-3">{site.webName}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Hosting service:</div>
                                <div className="d-inline ml-3">{site.hostName}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Domain name:</div>
                                <div className="d-inline ml-3">{site.domain}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Website manager:</div>
                                <div className="d-inline ml-3">{site.siteManager}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Update frequency:</div>
                                <div className="d-inline ml-3">{site.updateFreq}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Brand Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Purpose of the website:</div>
                                <div className="d-inline ml-3">{brand.purpose}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Audience:</div>
                                <div className="d-inline ml-3">{brand.audience}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Competition:</div>
                                <div className="d-inline ml-3">{brand.competition}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Website interaction with user:</div>
                                <div className="d-inline ml-3">{brand.siteAction}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Tagline:</div>
                                <div className="d-inline ml-3">{brand.tagLine}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">What is great about the business:</div>
                                <div className="d-inline ml-3">{brand.greatness}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>StyleInfo</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Logo:</div>
                                <div className="d-inline ml-3">{style.logo}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Site style:</div>
                                <div className="d-inline ml-3">{style.style}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Color palatte:</div>
                                <div className="d-inline ml-3">{style.color}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Brand standards:</div>
                                <div className="d-inline ml-3">{style.standards}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Print materials:</div>
                                <div className="d-inline ml-3">{style.printMaterials}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Fonts:</div>
                                <div className="d-inline ml-3">{style.fonts}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Photo services:</div>
                                <div className="d-inline ml-3">{style.photoService}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Websites for inspiration:</div>
                                <div className="d-inline ml-3">{style.websites}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Likes and dislikes of these sites:</div>
                                <div className="d-inline ml-3">{style.webLikesDis}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Features wanted in the website:</div>
                                <div className="d-inline ml-3">{style.features}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Landing Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Site entry:</div>
                                <div className="d-inline ml-3">{landing.siteEntry}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Branding images:</div>
                                <div className="d-inline ml-3">{landing.branding}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Call to action:</div>
                                <div className="d-inline ml-3">{landing.callToAction}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Website navigation liked:</div>
                                <div className="d-inline ml-3">{landing.simWebFunc}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>About Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">How they got started:</div>
                                <div className="d-inline ml-3">{about.entryHistory}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">About the client:</div>
                                <div className="d-inline ml-3">{about.aboutYou}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Skills and experience:</div>
                                <div className="d-inline ml-3">{about.expSkills}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">How to show portfolio:</div>
                                <div className="d-inline ml-3">{about.portStyle}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">What to highlight:</div>
                                <div className="d-inline ml-3">{about.highlight}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Qualifications:</div>
                                <div className="d-inline ml-3">{about.qualifications}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Services and/or products:</div>
                                <div className="d-inline ml-3">{about.serviceProd}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>SEO Content Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Known for:</div>
                                <div className="d-inline ml-3">{seoContent.knownFor}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">How to be found:</div>
                                <div className="d-inline ml-3">{seoContent.found}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Blog:</div>
                                <div className="d-inline ml-3">{seoContent.blog}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Maintain social media? Who?:</div>
                                <div className="d-inline ml-3">{seoContent.socialMedia}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Current email service?:</div>
                                <div className="d-inline ml-3">{seoContent.emailService}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Active email campaign?:</div>
                                <div className="d-inline ml-3">{seoContent.emailCamp}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Contact Info</h3>
                        <div className="border my-3">
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Address:</div>
                                <div className="d-inline ml-3">{contact.address}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Email:</div>
                                <div className="d-inline ml-3">{contact.email}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Work phone:</div>
                                <div className="d-inline ml-3">{contact.workPhone}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Other phone:</div>
                                <div className="d-inline ml-3">{contact.otherPhone}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">LinkedIn:</div>
                                <div className="d-inline ml-3">{contact.linkedin}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Instagram:</div>
                                <div className="d-inline ml-3">{contact.insta}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Facebook:</div>
                                <div className="d-inline ml-3">{contact.facebook}</div>
                            </div>
                            <div className="m-4">
                                <div className="font-weight-bold d-inline">Other social media:</div>
                                <div className="d-inline ml-3">{contact.otherSocial}</div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default ClientProfiles;