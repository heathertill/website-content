import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { User, json } from '../../utils/api';
import SubmitEdit from '../../utils/submitEdit';
import { wayToGo } from '../../utils/formService';

export interface BrandInfoProps extends RouteComponentProps { }

const BrandInfo: React.SFC<BrandInfoProps> = ({ history }) => {

    const [purpose, setPurpose] = useState('');
    const [audience, setAudience] = useState('');
    const [competition, setCompetition] = useState('');
    const [siteAction, setSiteAction] = useState('');
    const [tagline, setTagline] = useState('');
    const [greatness, setGreatness] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const canEdit = async () => {
        if (User.userid) {
            try {
                let brand = await json(`/api/brandInfo/${User.userid}`)
                if (brand !== null) {
                    setIsEditable(true)
                    setPurpose(brand.purpose),
                        setAudience(brand.audience),
                        setCompetition(brand.competition),
                        setSiteAction(brand.siteAction),
                        setTagline(brand.tagline),
                        setGreatness(brand.greatness)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => { canEdit() }, [])

    const handleBrand = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let body = {
            userid: User.userid,
            purpose,
            audience,
            competition,
            siteAction,
            tagline,
            greatness
        }
        if (isEditable === false) {
            try {
                let newBrandInfo = await json('/api/brandInfo', 'POST', body)
                if (newBrandInfo) {
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let editBrandInfo = await json(`/api/brandInfo/${User.userid}`, 'PUT', body);
                if (editBrandInfo) {
                    wayToGo('Brand info has been edited')
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        }
    }



    return (
        <div>
            <form className="form-group" onSubmit={(e) => handleBrand(e)} >
                <div>
                    <label htmlFor="purpose">What is the purpose of your website?</label>
                    <input type="text" className="form-control" value={purpose}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPurpose(e.target.value)} />
                </div>
                <div >
                    <label htmlFor="audience">Who is your target audience? (Age, industry, income, geographical area, etc.)</label>
                    <input type="text" className="form-control" value={audience}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAudience(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="competition">Who is your direct competition?</label>
                    <input type="text" className="form-control" value={competition}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompetition(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="siteAction">When people visit your website, what do you want them to do? `(Hire your service, join your company, communicate with you, be entertained, etc.)`</label>
                    <input type="text" className="form-control" value={siteAction}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteAction(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="tagline">Tag line - Describe your business in one short sentence. What is your business/website about?</label>
                    <input type="text" className="form-control" value={tagline}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTagline(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="greatness">What is great about your service?</label>
                    <input type="text" className="form-control" value={greatness}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGreatness(e.target.value)} />
                </div>
                <SubmitEdit editable={isEditable} />
            </form>
        </div>

    );
}

export default BrandInfo;