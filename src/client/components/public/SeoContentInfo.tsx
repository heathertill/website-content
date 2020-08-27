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

    useEffect(() => { canEdit() }, [])


    return (
        <div>Hello from seoContent</div>
    );
}

export default SeoContentInfo;