import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import Radio from '../../utils/radio';

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

    const blogMessage = 'Will you maintain an active blog with content relebant to your business?';
    const mediaMessage = 'Will you maintain social media accounts?';

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
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => { canEdit() }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (isEditable === false) {
            try {

            } catch (e) {
                console.log(e)
            }

        } else {
            try {

            } catch (e) {
                console.log(e)
            }
        }
    };

    const handleBlog = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setBlog('yes')
        } else {
            setBlog('no')
        }
    };

    const handleSMRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value;
        if (radio === 'yes') {
            setShowSM(true)
        } else {
            setShowSM(false);
            setSocialMedia(radio);
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
                    <Radio handlers={{ function: handleBlog }} values={{ message: blogMessage }} />
                </div>
                <div className="my-3">
                    <Radio handlers={{ function: handleSMRadio }} values={{ message: mediaMessage }} />
                    {showSM ?
                        <div className="my-3">
                            <label htmlFor="socialMedia">Please list the social media accounts.</label>
                            <input className="form-control" type="text" value={socialMedia} placeholder={socialMedia}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSocialMedia(e.target.value)} />
                        </div>
                        : null}
                </div>

            </form>
        </section>
    );
}

export default SeoContentInfo;