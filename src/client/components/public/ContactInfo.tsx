import * as React from 'react';
import { useState, useEffect } from 'react';
import { User, json } from '../../utils/api';

export interface ContactInfoProps { }

const ContactInfo: React.SFC<ContactInfoProps> = () => {

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [otherPhone, setOtherPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [insta, setInsta] = useState('');
    const [facebook, setFacebook] = useState('');
    const [otherSocial, setOtherSocial] = useState('');
    const [editable, setEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let contact = await json(`/api/contactInfo/${User.userid}`)
                if (contact) {
                    setEditable(true);
                    setAddress(contact.address);
                    setEmail(contact.email);
                    setWorkPhone(contact.workPhone);
                    setOtherPhone(contact.otherPhone);
                    setLinkedin(contact.linkedin);
                    
                }
            } catch (e) {
                console.log(e)
            }
        }
    }


    return (
        <div>Hello from contact info</div>
    );
}

export default ContactInfo;