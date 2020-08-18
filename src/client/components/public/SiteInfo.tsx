import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import { wayToGo} from '../../utils/formService';

import DomainRadio from '../radio/DomainRadio';
import WebRadio from '../radio/WebRadio';

export interface SiteInfoProps extends RouteComponentProps { }

const SiteInfo: React.SFC<SiteInfoProps> = ({ history }) => {

    const [webName, setWebName] = useState('');
    const [hostName, setHostName] = useState('');
    const [domain, setDomain] = useState('');
    const [siteManager, setSiteManager] = useState('');
    const [updateFreq, setUpdateFreq] = useState('');
    const [show, setShow] = useState(false);
    const [showDom, setShowDom] = useState(false);
    const [showDomName, setShowDomName] = useState(false);
    const [editable, setEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let site = await json(`/api/siteInfo/${User.userid}`)
                if (site !== null) {
                    setEditable(true)
                    setWebName(site.webName),
                    setHostName(site.hostName),
                    setDomain(site.domain),
                    setSiteManager(site.siteManager),
                    setUpdateFreq(site.updateFreq)
                }
                if (site.webName !== 'no') {
                    console.log('ding')
                    setShow(true)
                }
                if (site.domain !== 'no') {
                    console.log('dong')
                    setShowDomName(true)
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
            webName,
            hostName,
            domain,
            siteManager,
            updateFreq
        }
        console.log('body', body)
        e.preventDefault();
        if (editable === false) {
            try {
                let newSiteInfo = await json('/api/siteInfo', 'POST', body);
                if (newSiteInfo) {
                    history.push('/')
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                let editInfo = await json(`/api/siteInfo/${User.userid}`, 'PUT', body);
                if (editInfo) {
                    wayToGo('Site info has been edited!');
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    const handleWeb = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setShow(true);
            setShowDom(false);
        } else {
            setWebName('no')
            setHostName('no')
            setShowDom(true);
            setShow(false);
        }
    }

    const handleDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setShowDomName(true)
        } else {
            setShowDomName(false)
            setDomain('no')
        }
    }

    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <WebRadio handlers={{ handleWeb }} />
                    <div>
                        {show ? <div>
                            <div>
                                <label htmlFor="webName">Current URL:</label>
                                <input type="text" className="form-control" value={webName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Current Web hosting company:</label>
                                <input type="text" className="form-control" value={hostName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHostName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">What is your domain name?</label>
                                <input type="text" className="form-control" value={domain}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)} />
                            </div>
                        </div> : null}
                    </div>
                </div>
                <div>
                    {showDom ?
                        <div>
                            <DomainRadio handlers={{ handleDomain }} />
                        </div>
                        : null}
                </div>
                <div>
                    {showDomName ?
                        <div>
                            <label htmlFor="">What is your domain name?</label>
                            <input type="text" className="form-control" value={domain}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)} />
                        </div>
                        : null}
                </div>
                <div>
                    <div>
                        <label htmlFor="">Who will be managing your website?</label>
                        <input type="text" className="form-control" value={siteManager}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteManager(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">How frequently do you intend to update your website?</label>
                        <input type="text" className="form-control" value={updateFreq}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateFreq(e.target.value)} />
                    </div>
                </div>
                {editable ?
                    <button type="submit" className="btn btn-warning m-2">Edit</button>
                    :
                    <button type="submit" className="btn btn-warning m-2">Submit</button>
                }
            </form>
        </section>
    );
}

export default SiteInfo;