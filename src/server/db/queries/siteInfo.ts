import { connection as knex } from '../index';

const newSiteInfo = (siteObject: any) => knex('siteInfo').insert(siteObject);
const getSiteInfo = (id: number) => knex('siteInfo').select('userid', 'webName', 'hostName', 'domain', 'siteManager', 'updateFreq', ).where('userid', id)

export default {
    newSiteInfo,
    getSiteInfo
}