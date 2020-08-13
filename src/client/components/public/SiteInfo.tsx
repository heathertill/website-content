import * as React from 'react';
import { useState, useEffect } from 'react';

export interface SiteInfoProps {

}

const SiteInfo: React.SFC<SiteInfoProps> = () => {

    const [existingWeb, setExistingWeb] = useState(false);
    const [exWebName, setExWebName] = useState('');
    const [hosting, setHosting] = useState('');
    // const [hostName, setHostName] = useState('');
    const [domain, setDomain] = useState('');
    const [siteManager, setSiteManager] = useState('');
    const [updateFreq, setUpdateFreq] = useState('');
    // const [radio, setRadio] = useState('');

    let radio = true;

    const handleWebsite = () => {
if (radio = true) {
    console.log('so true')
} else {
    console.log('false')
}
    }

    return (
        <section>
            <form className="form-group">
                <div>
                    <div>Do yoy have an existing website?</div>
                    <div className="form-check-inline">
                        <div className="mx-2">
                            <input type="radio" className="form-check-input mx-2"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e.target.value)} />
                            <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        </div>
                        <div className="mx-2">
                        <input type="radio" className="form-check-input mx-2" value="no"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExistingWeb(false)} />
                            <label htmlFor="existingWeb" className="form-check-label">No</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" className="form-control" />
                </div>
            </form>
        </section>
    );
}

export default SiteInfo;