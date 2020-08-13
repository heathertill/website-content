import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, json } from './../../utils/api';

export interface SiteInfoProps {

}

const SiteInfo: React.SFC<SiteInfoProps> = () => {

    const [existingWeb, setExistingWeb] = useState('');
    const [exWebName, setExWebName] = useState('');
    // const [hosting, setHosting] = useState('');
    const [hostName, setHostName] = useState('');
    const [domain, setDomain] = useState('');
    const [siteManager, setSiteManager] = useState('');
    const [updateFreq, setUpdateFreq] = useState('');
    // const [radio, setRadio] = useState('');
    const [show, setShow] = useState(false);
    const [showDom, setShowDom] = useState(true)

    const handleSubmit = async (e: React.FormEvent<HTMLFontElement>) => {
        let body = {
            userid: User.userid,
            existingWeb,
            exWebName,
            hostName,
            domain,
            siteManager,
            updateFreq
        }

        e.preventDefault();

    }

    const handleR = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setExWebName('yes')
            setShow(true);
            setShowDom(false);
        } else {
            setExWebName('no')
            setShow(false)
            setShowDom(true)
        }
    }

    return (
        <section>
            <form className="form-group">
                <div>
                    <div>Do yoy have an existing website?</div>
                    <div className="form-check-inline" onChange={handleR}>
                        <input type="radio" className="form-check-input mx-2" value="yes" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        <input type="radio" className="form-check-input mx-2" value="no" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">No</label>
                    </div>
                    <div></div>
                    <div>
                        {show ? <div>
                            <div>
                                <label htmlFor="exWebName">Current URL:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div>
                                <label htmlFor="">Current Web hosting company:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div>
                                <label htmlFor="">What is your domain name?</label>
                                <input type="text" className="form-control" />
                            </div>

                        </div> : null}
                    </div>
                </div>
                <div>
                    {showDom ?
                        <div>
                                <label htmlFor="">Who will be managing your website?</label>
                                <input type="text" className="form-control" />
                        </div>
                        : null}
                </div>
                <div>
                    <div>
                        <label htmlFor="">Who will be managing your website?</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="">How frequently do you intend to update your website</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default SiteInfo;