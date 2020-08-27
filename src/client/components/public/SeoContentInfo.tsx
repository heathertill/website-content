import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import Radio from '../../utils/radio';
import { wayToGo } from '../../utils/formService';
import SubmitEdit from '../../utils/submitEdit';

export interface SeoContentInfoProps extends RouteComponentProps { }

const SeoContentInfo: React.SFC<SeoContentInfoProps> = ({ history }) => {

    const [knownFor, setKnownFor] = useState('');
    const [found, setFound] = useState('');
    const [blog, setBlog] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const [emailCamp, setEmailCamp] = useState('');
    const [emailService, setEmailService] = useState('');
    const [isEditable, setIsEditable] = useState(false);
    const [showSM, setShowSM] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    const blogMessage = 'Will you maintain an active blog with content relebant to your business?';
    const mediaMessage = 'Will you maintain social media accounts?';
    const emailMessage = 'Do you currently utilize an email service such as Mail Chimp or Constant Contact?';
    const campMessage = 'Do you plan to utilize an active email campaign to existing clients and prospects?';

    const canEdit = async () => {
        if (User.userid) {
            try {
                let seoContent = await json(`/api/seoContentInfo/${User.userid}`)
                if (seoContent !== null) {
                    setIsEditable(true),
                        setKnownFor(seoContent.knownFor),
                        setFound(seoContent.found),
                        setBlog(seoContent.blog),
                        setSocialMedia(seoContent.socialMedia),
                        setEmailCamp(seoContent.emailCamp),
                        setEmailService(seoContent.emailService)
                    if (seoContent.socialMedia !== 'no') {
                        setShowSM(true)
                    }
                    if (seoContent.emailService !== 'no') {
                        setShowEmail(true)
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => { canEdit() }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let body = {
            userid: User.userid,
            knownFor,
            found,
            blog,
            socialMedia,
            emailCamp,
            emailService
        }
        if (isEditable === false) {
            try {
                let newSeoContent = await json('/api/seoContentInfo', 'POST', body);
                if (newSeoContent) {
                    history.push('/NewClient');
                    location.reload();
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editSeoContent = await json(`/api/seoContentInfo/${User.userid}`, 'PUT', body);
                if (editSeoContent) {
                    wayToGo('SEO Content has been edited!');
                    history.push('/');
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
                }
            } catch (e) {
                console.log(e)
            }
        }
    };


    const handleBlog = (e: React.ChangeEvent<HTMLInputElement>) => {
        let blogRadio = e.target.value
        if (blogRadio === 'yes') {
            setBlog('yes')
        } else {
            setBlog('no')
        }
    };

    const handleSMRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        let smRadio = e.target.value;
        if (smRadio === 'yes') {
            setShowSM(true)
        } else {
            setShowSM(false);
            setSocialMedia(smRadio);
        }
    };

    const handleEmailRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        let emRadio = e.target.value;
        if (emRadio === 'yes') {
            setShowEmail(true);
        } else {
            setShowEmail(false);
            setEmailService('no')
        }
    };



    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div className="my-3">
                    <label htmlFor="knownFor">What do you want to be associated with? Known for?</label>
                    <input className="form-control" type="text" value={knownFor} placeholder={knownFor}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKnownFor(e.target.value)} />
                </div>
                <div className="my-3">
                    <label htmlFor="found">Why do you want to be found?</label>
                    <input className="form-control" type="text" value={found} placeholder={found}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFound(e.target.value)} />
                </div>
                <div className="my-3">
                    <Radio handlers={{ function: handleBlog }} values={{ message: blogMessage }} name={{ radioName: 'blogRadio' }} />
                </div>
                <div className="my-3">
                    <Radio handlers={{ function: handleSMRadio }} values={{ message: mediaMessage }} name={{ radioName: 'socialRadio' }} />
                    {showSM ?
                        <div className="my-3">
                            <label htmlFor="socialMedia">Please list the social media accounts.</label>
                            <input className="form-control" type="text" value={socialMedia} placeholder={socialMedia}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSocialMedia(e.target.value)} />
                        </div>
                        : null}
                </div>
                <div>
                    <Radio handlers={{ function: handleEmailRadio }} values={{ message: emailMessage }} name={{ radioName: 'emailRadio' }} />
                    {showEmail ?
                        <div className="my-3">
                            <label htmlFor="emailService">Please list the email service.</label>
                            <input className="form-control" type="text" value={emailService} placeholder={emailService}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailService(e.target.value)} />
                        </div>
                        : null}
                </div>
                <div className="my-3">
                    <Radio handlers={{ function: (e: React.ChangeEvent<HTMLInputElement>) => setEmailCamp(e.target.value) }} values={{ message: campMessage }} name={{ radioName: 'campRadio' }} />
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default SeoContentInfo;