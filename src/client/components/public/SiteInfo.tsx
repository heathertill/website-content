import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from './../../utils/api';

export interface SiteInfoProps extends RouteComponentProps { }

const SiteInfo: React.SFC<SiteInfoProps> = ({ history }) => {

    const [existingWeb, setExistingWeb] = useState('');
    const [exWebName, setExWebName] = useState('');
    // const [hosting, setHosting] = useState('');
    const [hostName, setHostName] = useState('');
    const [domain, setDomain] = useState('');
    const [siteManager, setSiteManager] = useState('');
    const [updateFreq, setUpdateFreq] = useState('');
    // const [radio, setRadio] = useState('');
    const [show, setShow] = useState(false);
    const [showDom, setShowDom] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let body = {
            userid: User.userid,
            existingWeb,
            exWebName,
            hostName,
            domain,
            siteManager,
            updateFreq
        }
        console.log('body', body)
        e.preventDefault();
        try {
            let newSiteInfo = await json('/api/siteInfo', 'POST', body);
            if (newSiteInfo) {
                history.push('/')
            }
        } catch (e) {
            console.log(e);

        }
    }

    const handleWeb = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setExWebName('yes')
            setShow(true);
            setShowDom(false);
            console.log(showDom)
        } else {
            setExWebName('no')
            setShow(false)
            setShowDom(true)
            console.log(showDom)
        }
    }


    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div>Do yoy have an existing website?</div>
                    <div className="form-check-inline" onChange={handleWeb}>
                        <input type="radio" className="form-check-input mx-2" value="yes" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        <input type="radio" className="form-check-input mx-2" value="no" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">No</label>
                    </div>
                    <div>
                        {show ? <div>
                            <div>
                                <label htmlFor="exWebName">Current URL:</label>
                                <input type="text" className="form-control" value={exWebName} 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExWebName(e.target.value)}/>
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
               */}
                <div>
                    {showDom ?
                        <div>
                            <label htmlFor="">Do you have a domain name?</label>
                            <input type="text" className="form-control" value={domain}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDomain(e.target.value)} />
                        </div>
                        : null}
                </div>
                <div>
                    <div>
                        <label htmlFor="">Who will be managing your website?</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="">How frequently do you intend to update your website?</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-warning m-2">Submit</button>
            </form>
        </section>
    );
}

export default SiteInfo;