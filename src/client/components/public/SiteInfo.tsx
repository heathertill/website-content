import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import { wayToGo } from '../../utils/formService';
import SubmitEdit from '../../utils/submitEdit';
import Radio from '../../utils/radio';

export interface SiteInfoProps extends RouteComponentProps { }

const SiteInfo: React.SFC<SiteInfoProps> = ({ history }) => {

    const [webName, setWebName] = useState('');
    const [hostName, setHostName] = useState('');
    const [domain, setDomain] = useState('');
    const [siteManager, setSiteManager] = useState('');
    const [updateFreq, setUpdateFreq] = useState('');
    const [budget, setBudget] = useState('');
    const [completion, setCompletion] = useState('');
    const [show, setShow] = useState(false);
    const [showDom, setShowDom] = useState(false);
    const [showDomName, setShowDomName] = useState(false);
    const [isEditable, setIsEditable] = useState(false);


    const canEdit = async () => {
        if (User.userid) {
            try {
                let site = await json(`/api/siteInfo/${User.userid}`)
                if (site !== null) {
                    setIsEditable(true);
                    setWebName(site.webName);
                    setHostName(site.hostName);
                    setDomain(site.domain);
                    setSiteManager(site.siteManager);
                    setUpdateFreq(site.updateFreq);
                    setBudget(site.budget);
                    setCompletion(site.completion);
                }
                if (site.webName !== 'no') {
                    setShow(true)
                }
                if (site.domain !== 'no') {
                    setShowDomName(true)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    useEffect(() => { canEdit() }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let body = {
            userid: User.userid,
            webName,
            hostName,
            domain,
            siteManager,
            updateFreq,
            budget,
            completion
        }
        if (isEditable === false) {
            try {
                let newSiteInfo = await json('/api/siteInfo', 'POST', body);
                if (newSiteInfo) {
                    history.push('/NewClient');
                    location.reload();
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
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
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
            setWebName('no');
            setHostName('no');
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

    let siteMessage = 'Do you have an existing website?';
    let domainMessage = 'Do you have a domain?';

    return (
        <section>
            <h1 className="mb-3">Site Information</h1>
            <form className="form-group mx-4" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <Radio handlers={{function: handleWeb}} values={{message: siteMessage}} name={{radioName: 'siteRadio'}} />
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
                            <Radio handlers={{function: handleDomain}} values={{message: domainMessage}} name={{radioName: 'domainRadio'}} />
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
                    <div>
                        <label htmlFor="">What is your budget for this project?</label>
                        <input type="text" className="form-control" value={budget}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">What is your desired completion date?</label>
                        <input type="text" className="form-control" value={completion}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompletion(e.target.value)} />
                    </div>
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default SiteInfo;