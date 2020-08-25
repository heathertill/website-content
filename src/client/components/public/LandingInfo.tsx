import * as React from 'react';
import { useState, useEffect } from 'react';

export interface LandingInfoProps { }

const LandingInfo: React.SFC<LandingInfoProps> = () => {

    const [siteEntry, setSiteEntry] = useState('');
    const [branding, setBranding] = useState('');
    const [callToAction, setCallToAction] = useState('');
    const [simWebFunc, setSimWebFunc] = useState('');



    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={siteEntry} placeholder={siteEntry}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteEntry(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={branding} placeholder={branding}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBranding(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
            </form>
        </section>
    );
}

export default LandingInfo;