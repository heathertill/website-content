import config from '../config';
import * as knex from 'knex';

import Users from './queries/users';
import Tokens from './queries/tokens';
import ClientInfo from './queries/clientInfo';
import SiteInfo from './queries/siteInfo';
import BrandInfo from './queries/brandInfo';
import StyleInfo from './queries/styleInfo';
import LandingInfo from './queries/landingInfo';
import AboutInfo from './queries/aboutInfo';

export const connection = knex(config.knex);

export default {
    Users,
    Tokens,
    ClientInfo,
    SiteInfo,
    BrandInfo,
    StyleInfo,
    LandingInfo,
    AboutInfo
}