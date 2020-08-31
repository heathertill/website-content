import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { User, json } from '../../utils/api';
import { wayToGo } from '../../utils/formService';
import SubmitEdit from '../../utils/submitEdit';


export interface AboutInfoProps extends RouteComponentProps { }

const AboutInfo: React.SFC<AboutInfoProps> = ({ history }) => {

    const [entryHistory, setEntryHistory] = useState('');
    const [aboutYou, setAboutYou] = useState('');
    const [expSkills, setExpSkills] = useState('');
    const [portStyle, setPortStyle] = useState('');
    const [highlight, setHighlight] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [serviceProd, setServiceProd] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let about = await json(`/api/aboutInfo/${User.userid}`);
                if (about !== null) {
                    setIsEditable(true);
                    setEntryHistory(about.entryHistory);
                    setAboutYou(about.aboutYou);
                    setExpSkills(about.expSkills);
                    setPortStyle(about.portStyle);
                    setHighlight(about.highlight);
                    setQualifications(about.qualifications);
                    setServiceProd(about.serviceProd);
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
            entryHistory,
            aboutYou,
            expSkills,
            portStyle,
            highlight,
            qualifications,
            serviceProd
        }
        if (isEditable === false) {
            try {
                let newAboutInfo = await json('/api/aboutInfo', 'POST', body);
                if (newAboutInfo) {
                    history.push('/NewClient');
                    location.reload();
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editAboutInfo = await json(`/api/aboutInfo/${User.userid}`, 'PUT', body);
                if (editAboutInfo) {
                    wayToGo('About info has been updated');
                    history.push('/');
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
            <h1 className="mb-3">About Information Form</h1>
            <form className="form-group mx-4" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="entryHistory" >How did you get started?</label>
                    <textarea className="form-control" rows={8} value={entryHistory} placeholder={entryHistory}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEntryHistory(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="aboutYou" >What do you want to tell about yourself?</label>
                    <textarea className="form-control" rows={8} value={aboutYou} placeholder={aboutYou}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAboutYou(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="qualifications" >Please list your qualificatons. Degrees, accreditations, etc.</label>
                    <textarea className="form-control" rows={8} value={qualifications} placeholder={qualifications}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQualifications(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="expSkills" >What are your skills and experience? Previous jobs, hobbies, life experience, etc. that have help build your experience or show your expertice.</label>
                    <textarea className="form-control" rows={8} value={expSkills} placeholder={expSkills}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setExpSkills(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="portStyle" >How do you want to show your portfolio? A few highlighted items or a large gallery? Do you want any/all items to be links?</label>
                    <textarea className="form-control" rows={8} value={portStyle} placeholder={portStyle}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPortStyle(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="highlight" >What do you want to highlight? Include items you are proud of and show the depth and breadth of your skills/services.</label>
                    <textarea className="form-control" rows={8} value={highlight} placeholder={highlight}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setHighlight(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor="serviceProd" >What services or products do you offer?</label>
                    <textarea className="form-control" rows={8} value={serviceProd} placeholder={serviceProd}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setServiceProd(e.target.value)} ></textarea>
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default AboutInfo;