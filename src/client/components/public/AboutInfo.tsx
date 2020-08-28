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
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="entryHistory" >How did you get started?</label>
                    <input className="form-control" type="text" value={entryHistory} placeholder={entryHistory}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEntryHistory(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="aboutYou" >What do you want to tell about yourself?</label>
                    <input className="form-control" type="text" value={aboutYou} placeholder={aboutYou}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAboutYou(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="qualifications" >Please list your qualificatons. Degrees, accreditations, etc.</label>
                    <input className="form-control" type="text" value={qualifications} placeholder={qualifications}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQualifications(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="expSkills" >What are your skills and experience? Previous jobs, hobbies, life experience, etc. that have help build your experience or show your expertice.</label>
                    <input className="form-control" type="text" value={expSkills} placeholder={expSkills}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpSkills(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="portStyle" >How do you want to show your portfolio? A few highlighted items or a large gallery? Do you want any/all items to be links?</label>
                    <input className="form-control" type="text" value={portStyle} placeholder={portStyle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPortStyle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="highlight" >What do you want to highlight? Include items you are proud of and show the depth and breadth of your skills/services.</label>
                    <input className="form-control" type="text" value={highlight} placeholder={highlight}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHighlight(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="serviceProd" >What services or products do you offer?</label>
                    <input className="form-control" type="text" value={serviceProd} placeholder={serviceProd}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setServiceProd(e.target.value)} />
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default AboutInfo;