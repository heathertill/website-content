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
    const [isEditable, setIsEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let landing = await json(`/api/landingInfo/${User.userid}`)
                if (landing !== null) {
                    setIsEditable(true);
                    setSiteEntry(landing.siteEntry);
                    setBranding(landing.branding);
                    setCallToAction(landing.callToAction);
                    setSimWebFunc(landing.simWebFunc);
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
        if (isEditable === false) {
            try {
                let newLandingInfo = await json('/api/landingInfo', 'POST', body);
                if (newLandingInfo) {
                    history.push('/NewClient');
                    location.reload();
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editInfo = await json(`/api/landingInfo/${User.userid}`, 'PUT', body);
                if (editInfo) {
                    wayToGo('Landing info has been edited!');
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


    return (
        <section>
            <h1 className="mb-3">Landing Informaion Page</h1>
            <form className="form-group mx-4" onSubmit={(e) => handleSubmit(e)}>
                <div className="my-3">
                    <label htmlFor="siteEntry" >Site entry: How do you want the site to flow? Landing page with a Call to Action link on the opening page? Limited navigation menu on landing page? Continuous scrolling with visible navigation bar?</label>
                    <textarea className="form-control" rows={8} value={siteEntry} placeholder={siteEntry}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSiteEntry(e.target.value)} ></textarea>
                </div>
                <div className="my-3">
                    <label htmlFor="branding" >What images or branding do you want to be on your landing page?</label>
                    <textarea className="form-control" rows={3} value={branding} placeholder={branding}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBranding(e.target.value)} ></textarea>
                </div>
                <div className="my-3">
                    <label htmlFor="callToAction" >What is your call to action statement/purpose? Contact me about... Follow me.... Sign up...</label>
                    <textarea className="form-control" rows={8} value={callToAction} placeholder={callToAction}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCallToAction(e.target.value)} ></textarea>
                </div>
                <div className="my-3">
                    <label htmlFor="simWebFunc" >Have you seen any particular website navigation features you like on other websites?  If so, list the url and explain what you like about it below.</label>
                    <textarea className="form-control" rows={8} value={simWebFunc} placeholder={simWebFunc}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSimWebFunc(e.target.value)} ></textarea>
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default LandingInfo;