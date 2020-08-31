import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { User, json } from '../../utils/api';
import SubmitEdit from '../../utils/submitEdit';
import { wayToGo } from '../../utils/formService';

export interface ContactInfoProps extends RouteComponentProps { }

const ContactInfo: React.SFC<ContactInfoProps> = ({ history }) => {

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [otherPhone, setOtherPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [insta, setInsta] = useState('');
    const [facebook, setFacebook] = useState('');
    const [otherSocial, setOtherSocial] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let contact = await json(`/api/contactInfo/${User.userid}`)
                if (contact !== null) {
                    setIsEditable(true);
                    setAddress(contact.address);
                    setEmail(contact.email);
                    setWorkPhone(contact.workPhone);
                    setOtherPhone(contact.otherPhone);
                    setLinkedin(contact.linkedin);
                    setInsta(contact.insta);
                    setFacebook(contact.facebook);
                    setOtherSocial(contact.otherSocial);
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
            address,
            email,
            workPhone,
            otherPhone,
            linkedin,
            insta,
            facebook,
            otherSocial
        }
        if (isEditable === false) {
            try {
                let newContact = await json('/api/contactInfo', 'POST', body);
                if (newContact) {
                    history.push('/NewClient');
                    location.reload();

                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editContact = await json(`/api/contactInfo/${User.userid}`, 'PUT', body);
                if (editContact) {
                    wayToGo('Contact info has been edited')
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
                <div className="my-3">
                    <h1>Contact Information</h1>
                    <div className="mt-3 mb-5">
                        <h3>This is the information that will appear on your website.</h3>
                    </div>
                </div>
                <div className="my-3" >
                    <label htmlFor="address">Physical Address</label>
                    <input className="form-control" type="text" value={address} placeholder={address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="text" value={email} placeholder={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="workPhone">Work Phone</label>
                    <input className="form-control" type="text" value={workPhone} placeholder={workPhone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkPhone(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="otherPhone">Other Phone</label>
                    <input className="form-control" type="text" value={otherPhone} placeholder={otherPhone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherPhone(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input className="form-control" type="text" value={linkedin} placeholder={linkedin}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinkedin(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="insta">Instagram</label>
                    <input className="form-control" type="text" value={insta} placeholder={insta}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInsta(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="facebook">Facebook</label>
                    <input className="form-control" type="text" value={facebook} placeholder={facebook}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFacebook(e.target.value)} />
                </div>
                <div className="my-3" >
                    <label htmlFor="otherSocial">Other Social Accounts</label>
                    <input className="form-control" type="text" value={otherSocial} placeholder={otherSocial}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherSocial(e.target.value)} />
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default ContactInfo;