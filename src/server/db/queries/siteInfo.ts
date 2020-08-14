import { connection as knex } from '../index';

const newSiteInfo = (siteObject: any) => knex('siteInfo').insert(siteObject);

export default {
    newSiteInfo
}