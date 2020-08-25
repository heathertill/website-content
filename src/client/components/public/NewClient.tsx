import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps { }

const Home: React.SFC<HomeProps> = () => {
    return (
        <section>
            <h1>Please complete the following forms</h1>
            <div className="mb-3" >
                <h3>
                    We recognized that often times these kind of forms can seem challenging. If you encounter a question to which you don’t yet have an answer, feel free to skip it. Also, feel free to call or email for any clarification that might be needed. We’re here to help! Thanks so much for helping us create the best website we can for your brand!
                </h3>
            </div>
            <div>
                <Link to={'/ClientInfo'} className="btn btn-warning m-2">Client Info</Link>
            </div>
            <div>
                <Link to={'/SiteInfo'} className="btn btn-warning m-2">Site Info</Link>
            </div>
            <div>
                <Link to={'/BrandInfo'} className="btn btn-warning m-2">Brand Info</Link>
            </div>
            <div>
                <Link to={'/StyleInfo'} className="btn btn-warning m-2">Style Info</Link>
            </div>
            <div>
                <Link to={'/LandingInfo'} className="btn btn-warning m-2">Landing Info</Link>
            </div>
            <div>
                <Link to={'/AboutInfo'} className="btn btn-warning m-2">About Info</Link>
            </div>
        </section>
    );
}

export default Home;