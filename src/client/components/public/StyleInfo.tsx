import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import SubmitEdit from '../../utils/submitEdit';
import { wayToGo, radioChecked } from '../../utils/formService';
import StyleRadio from '../radio/StyleRadio';
import PrintRadio from '../radio/PrintRadio';
import { User, json } from '../../utils/api';

interface Features { name: string }

export interface StyleInfoProps extends RouteComponentProps { }

const StyleInfo: React.SFC<StyleInfoProps> = ({ history }) => {

    const [logo, setLogo] = useState('');
    const [style, setStyle] = useState('');
    const [color, setColor] = useState('');
    const [standards, setStandards] = useState('');
    const [printMaterial, setPrintMaterial] = useState('');
    const [fonts, setFonts] = useState('');
    const [photoService, setPhotoService] = useState('');
    const [websites, setWebsites] = useState('');
    const [webLikesDis, setWebLikesDis] = useState('');
    const [features, setFeatures] = useState([]);
    const [isEditable, setIsEditable] = useState(false);
    const [show, setShow] = useState(false);
    const [mark, setMark] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let getStyle = await json(`/api/styleInfo/${User.userid}`)
                if (getStyle !== null) {
                    setIsEditable(true)
                    setLogo(getStyle.logo),
                        setStyle(getStyle.style),
                        setColor(getStyle.color),
                        setStandards(getStyle.standards),
                        setPrintMaterial(getStyle.printMaterial),
                        setFonts(getStyle.fonts),
                        setPhotoService(getStyle.photoService),
                        setWebsites(getStyle.websites),
                        setWebLikesDis(getStyle.webLikesDis),
                        radioChecked(getStyle.logo, setMark)
                    if (getStyle.features === null) {
                        setFeatures(features)
                    }
                } if (getStyle.standards !== 'no') {
                    setShow(true)
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    useEffect(() => { canEdit() }, []);

    const handleStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radioStyle = e.target.value;
        if (radioStyle === 'yes') {
            setShow(true);
        } else {
            setStandards('no');
            setShow(false);
        }
    };

    const handlePrint = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radioPrint = e.target.value;
        if (radioPrint === 'yes') {
            setPrintMaterial('yes')
        } else {
            setPrintMaterial('no')
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        let strFeatures = features.join(', ');
        let body = {
            userid: User.userid,
            logo,
            style,
            color,
            standards,
            printMaterial,
            fonts,
            photoService,
            websites,
            webLikesDis,
            features: strFeatures
        }
        console.log(body)
        e.preventDefault();
        if (isEditable === false) {
            try {
                let newStyleInfo = await json('/api/styleInfo', 'POST', body);
                if (newStyleInfo) {
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editStyleInfo = await json(`/api/styleInfo/${User.userid}`, 'PUT', body)
                if (editStyleInfo) {
                    wayToGo('Style info has been edited');
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        }
    };

    const handleCheckbox = (e: any, id: string) => {
        features.push(e);
        (document.getElementById(id) as HTMLInputElement).disabled = true
    };

    return (
        <section>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)} >
                <div className="my-4">
                    <div>Do you want to use a logo?</div>
                    <div className="form-check-inline" id="logoRadio"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogo(e.target.value)}>
                        <input type="radio" id="yes Logo" className="form-check-input mx-2" value="yes" name="logoChoice"  />
                        <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        <input type="radio" id="no Logo" className="form-check-input mx-2" value="no" name="logoChoice"  />
                        <label htmlFor="existingWeb" className="form-check-label">No</label>
                    </div>
                </div>
                <div className="my-4">
                    <div>What features are you interested in including on your?</div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Gallery" id="Gallery"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Gallery")} />
                                <label className="form-check-label">Gallery</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Calendar" id="Calendar"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Calendar")} />
                                <label className="form-check-label">Calendar</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="e-Commerce" id="e-Commerce"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "e-Commerce")} />
                                <label className="form-check-label">e-Commerce</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Registration form" id="Registration form"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Registration form")} />
                                <label className="form-check-label">Registration form</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Blog" id="Blog"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Blog")} />
                                <label className="form-check-label">Blog</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Sidebars" id="Sidebars"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Sidebars")} />
                                <label className="form-check-label">Sidebars</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Customer login" id="Customer login"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Customer login")} />
                                <label className="form-check-label">Customer login</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Newsletter signup" id="Newsletter signup"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Newsletter signup")} />
                                <label className="form-check-label">Newsletter signup</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Donations" id="Donations"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Donations")} />
                                <label className="form-check-label">Donations</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Slide show" id="Slide show"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Slide show")} />
                                <label className="form-check-label">Slide show</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="News and announcements" id="News and announcements"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "News and announcements")} />
                                <label className="form-check-label">News and announcements</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Project portfolio" id="Project portfolio"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e.target.value, "Project portfolio")} />
                                <label className="form-check-label">Project portfolio</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="text">What style are you looking for? Professional, edgy, modern, calm, minimal, etc. </label>
                    <input type="text" className="form-control" value={style}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStyle(e.target.value)} />
                </div>
                <div className="my-4">
                    <label htmlFor="text">What is your color palette?</label>
                    <input type="text" className="form-control" value={color}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)} />
                </div>
                <div className="my-4">
                    <StyleRadio handlers={{ handleStyle }} />
                    {show ?
                        <div>
                            <label htmlFor="text">Please give a brief discription of your brand standards.</label>
                            <input type="text" className="form-control" value={standards}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFonts(e.target.value)} />
                        </div>
                        : null
                    }
                </div>
                <div className="my-4">
                    <PrintRadio handlers={{ handlePrint }} />
                </div>
                <div className="my-4">
                    <label htmlFor="text">What font style are you looking for? What fonts do you currently use?</label>
                    <input type="text" className="form-control" value={fonts}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFonts(e.target.value)} />
                </div>
                <div className="my-4">
                    <div>Do you need professional photography/videography services?</div>
                    <div className="form-check-inline" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhotoService(e.target.value)}>
                        <input type="radio" className="form-check-input mx-2" value="yes" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        <input type="radio" className="form-check-input mx-2" value="no" name="choice" />
                        <label htmlFor="existingWeb" className="form-check-label">No</label>
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="text">List 3-5 websites you would like to use as inspiration for your own</label>
                    <input type="text" className="form-control" value={websites}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsites(e.target.value)} />
                </div>
                <div className="my-4">
                    <label htmlFor="text">What do you like about these websites? What do you dislike about these or other websites?</label>
                    <input type="text" className="form-control" value={webLikesDis}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebLikesDis(e.target.value)} />
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </section>
    );
}

export default StyleInfo;