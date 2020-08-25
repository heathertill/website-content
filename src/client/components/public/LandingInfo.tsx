import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, json } from '../../utils/api';
import SubmitEdit from '../../utils/submitEdit';

export interface LandingInfoProps { }

const LandingInfo: React.SFC<LandingInfoProps> = () => {

    const [siteEntry, setSiteEntry] = useState('');
    const [branding, setBranding] = useState('');
    const [callToAction, setCallToAction] = useState('');
    const [simWebFunc, setSimWebFunc] = useState('');
    const [editable, setEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let landing = await json(`/api/landingInfo/${User.userid}`)
                if (landing !== null) {
                    setEditable(true),
                        setSiteEntry(landing.siteEntry),
                        setBranding(landing.branding),
                        setCallToAction(landing.callToAction),
                        setSimWebFunc(landing.simWebFunc)
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
            siteEntry,
            branding,
            callToAction,
            simWebFunc
        }
        if (editable === false) {
            try {
                let newLandingInfo = await('/')
            } catch (e) {
                console.log(e)
            }

        } else {
            try {

            } catch (e) {
                console.log(e)
            }
        }
    }


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
                    <input className="form-control" type="text" value={callToAction} placeholder={callToAction}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallToAction(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={simWebFunc} placeholder={simWebFunc}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSimWebFunc(e.target.value)} />
                </div>
                <SubmitEdit editable />
            </form>
        </section>
    );
}

export default LandingInfo;