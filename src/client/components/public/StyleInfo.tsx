import * as React from 'react';
import {useState, useEffect} from 'react';

export interface StyleInfoProps {
    
}
 
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

    

    return ( 
        <div>Hello from style info</div>
     );
}
 
export default StyleInfo;