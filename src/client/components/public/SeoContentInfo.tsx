import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, json } from '../../utils/api';

export interface SeoContentInfoProps { }

const SeoContentInfo: React.SFC<SeoContentInfoProps> = () => {

    const [knownFor, setKnownFor] = useState('');
    const [found, setFound] = useState('');
    const [blog, setBlog] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const [emailCamp, setEmailCamp] = useState('');
    const [emailService, setEmailService] = useState('');
    const [isEditable, setIsEditable] = useState(false);

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

    const handleSubmit = () => {
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
    }


    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="" > </label>
                    <input className="form-control" type="text" value={} placeholder={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
                </div>
            </form>
        </section>
    );
}

export default SeoContentInfo;