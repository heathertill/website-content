import * as React from 'react';
import { useState, useEffect } from 'react';
import {RouteComponentProps} from 'react-router-dom'
import LogoRadio from '../radio/LogoRadio';
import StyleRadio from '../radio/StyleRadio';
import PrintRadio from '../radio/PrintRadio';

export interface StyleInfoProps extends RouteComponentProps { }

const StyleInfo: React.SFC<StyleInfoProps> = () => {

    const [logo, setLogo] = useState('');
    const [style, setStyle] = useState('');
    const [color, setColor] = useState('');
    const [standards, setStandards] = useState('');
    const [printMaterial, setPrintMaterial] = useState('');
    const [fonts, setFonts] = useState('');
    const [photoService, setPhotoService] = useState('');
    const [websites, setWebsites] = useState('');
    const [webLikesDis, setWebLikesDis] = useState('');
    const [features, setFeatures] = useState('');
    const [editable, setEditable] = useState(false);
    const [show, setShow] = useState(false);

    const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setLogo('yes')
        } else {
            setLogo('no')
        }
    };

    const handleStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value;
        if (radio === 'yes') {
            
        } else {
            
        }
    }

    return ( 
        <section>
            <LogoRadio handlers={{handleLogo}} />
            <form action="" className="form-group">
                <div>
                    <label htmlFor="text">What style are you looking for? Professional, edgy, modern, calm, minimal, etc. </label>
                    <input type="text" className="form-control" value={style}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStyle(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="text">What is your color palette?</label>
                    <input type="text" className="form-control" value={color}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value)} />
                </div>


                <div>
                    <label htmlFor="text">What font style are you looking for? What fonts do you currently use?</label>
                    <input type="text" className="form-control" value={fonts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFonts(e.target.value)} />
                </div>


                <div>
                    <label htmlFor="text">List 3-5 websites you would like to use as inspiration for your own</label>
                    <input type="text" className="form-control" value={websites}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsites(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="text">What do you like about these websites? What do you dislike about these or other websites?</label>
                    <input type="text" className="form-control" value={webLikesDis}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebLikesDis(e.target.value)} />
                </div>
            </form>
        </section>
     );
}
 
export default StyleInfo;