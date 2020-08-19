import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import SubmitEdit from '../../utils/submitEdit';
import { wayToGo, radioChecked } from '../../utils/formService';
import LogoRadio from '../radio/LogoRadio';
import StyleRadio from '../radio/StyleRadio';
import PrintRadio from '../radio/PrintRadio';
import { User, json } from '../../utils/api';

interface Features { name: string, active: boolean }

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
    const [features, setFeatures] = useState<Features[]>([]);
    const [editable, setEditable] = useState(false);
    const [show, setShow] = useState(false);
    const [mark, setMark] = useState(false);
    const [active, setActive] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let getStyle = await json(`/api/styleInfo/${User.userid}`)
                if (getStyle !== null) {
                    setEditable(true)
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
                } if (getStyle.standards !== 'no') {
                    setShow(true)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    useEffect(() => { canEdit() }, [])

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
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            webLikesDis
        }
        console.log(body)
        e.preventDefault();
        if (editable === false) {
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

    }

    const handleCheckbox = (e: any) => {
        setActive(!active);
        features.push(e.target.value)
        console.log(features)
        setActive(true)
    }

    return (
        <section>

            <form className="form-group" onSubmit={(e) => handleSubmit(e)} >
                <div className="my-4">
                    <div>Do you want to use a logo?</div>
                    <div className="form-check-inline" id="logoRadio"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogo(e.target.value)}>
                        <input type="radio" id="yes Logo" className="form-check-input mx-2" value="yes" name="logoChoice" checked={mark}
                            onChange={() => setMark(true)} />
                        <label htmlFor="existingWeb" className="form-check-label">Yes</label>
                        <input type="radio" id="no Logo" className="form-check-input mx-2" value="no" name="logoChoice" checked={!mark}
                            onChange={() => setMark(false)} />
                        <label htmlFor="existingWeb" className="form-check-label">No</label>
                    </div>
                </div>

                <div className="my-4">
                    <div>What features are you interested in including on your website?</div>
                    {/* <div className="form-check"> */}
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="Gallery" disabled={active}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e)} />
                        <label htmlFor="" className="form-check-label">Gallery</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="Calendar"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckbox(e)} />
                        <label htmlFor="" className="form-check-label">Calendar</label>
                    </div>
                    {/* </div> */}

                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => (features.push(e.target.value), console.log(features))} />
                        <label htmlFor="" className="form-check-label"></label>
                    </div> */}

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
                <SubmitEdit editable />
            </form>
        </section>
    );
}

export default StyleInfo;