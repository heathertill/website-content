import * as React from 'react';
import { useState, useEffect } from 'react';
import {RouteComponentProps} from 'react-router-dom'
import { User, json } from '../../utils/api';
import { wayToGo } from '../../utils/formService';
import SubmitEdit from '../../utils/submitEdit';


export interface AboutInfoProps extends RouteComponentProps { }

const AboutInfo: React.SFC<AboutInfoProps> = ({history}) => {

    const [entryHistory, setEntryHistory] = useState('');
    const [aboutYou, setAboutYou] = useState('');
    const [expSkills, setExpSkills] = useState('');
    const [portStyle, setPortStyle] = useState('');
    const [highlight, setHighlight] = useState('');
    const [editable, setEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let about = await json(`/api/aboutInfo/${User.userid}`)
                if (about !== null) {
                    setEditable(true),
                        setEntryHistory(about.entryHistory),
                        setAboutYou(about.aboutYou),
                        setExpSkills(about.expSkills),
                        setPortStyle(about.portStyle),
                        setHighlight(about.highlight)
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
            highlight
        }
        if (editable === false) {
            try {
                let newAboutInfo = await json('/api/aboutInfo', 'POST', body);
                if (newAboutInfo) {
                    history.push('/')
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
                <SubmitEdit editable />
            </form>
        </section>
    );
}

export default AboutInfo;