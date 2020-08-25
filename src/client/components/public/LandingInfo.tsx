import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import SubmitEdit from '../../utils/submitEdit';
import { wayToGo } from '../../utils/formService';

export interface LandingInfoProps extends RouteComponentProps { }

const LandingInfo: React.SFC<LandingInfoProps> = ({ history }) => {

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
                let newLandingInfo = await json('/api/landingInfo', 'POST', body);
                if (newLandingInfo) {
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                console.log('ding')
                let editInfo = await json(`/api/landingInfo/${User.userid}`, 'PUT', body);
                if (editInfo) {
                    wayToGo('Landing info has been edited!');
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        }
    }


    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div className="my-3">
                    <label htmlFor="siteEntry" >Site entry: How do you want the site to flow? Landing page with a Call to Action link on the opening page? Limited navigation menu on landing page? Continuous scrolling with visible navigation bar?</label>
                    <input className="form-control" type="text" value={siteEntry} placeholder={siteEntry}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteEntry(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="branding" >What images or branding do you want to be on your landing page?</label>
                    <input className="form-control" type="text" value={branding} placeholder={branding}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBranding(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="callToAction" >What is your call to action statement/purpose? Contact me about... Follow me.... Sign up...</label>
                    <input className="form-control" type="text" value={callToAction} placeholder={callToAction}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCallToAction(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="simWebFunc" >Have you seen any particular functions you like on another website? If so, list the url and explain what you like about it below.</label>
                    <input className="form-control" type="text" value={simWebFunc} placeholder={simWebFunc}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSimWebFunc(e.target.value)} />
                </div>
                <SubmitEdit editable />
            </form>
        </section>
    );
}

export default LandingInfo;