import * as React from 'react';
import { useState, useEffect } from 'react';
import {RouteComponentProps} from 'react-router-dom'
import LogoRadio from '../radio/LogoRadio';

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

    const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        let radio = e.target.value
        if (radio === 'yes') {
            setLogo('yes')
        } else {
            setLogo('no')
        }
    }

    return ( 
        <section>
            <LogoRadio handlers={{handleLogo}} />
            <form action="" className="form-group">
                <div>
                    <label htmlFor="text">What style are you looking for? Professional, edgy, modern, calm, minimal, etc. </label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="text"></label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="text"></label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="text"></label>
                    <input type="text" className="form-control"/>
                </div>
            </form>
        </section>
     );
}
 
export default StyleInfo;