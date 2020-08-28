import { connection as knex } from '../index';

const newSiteInfo = (siteObject: any) => knex('siteInfo').insert(siteObject);
const getSiteInfo = (id: number) => knex('siteInfo').select('userid', 'webName', 'hostName', 'domain', 'siteManager', 'updateFreq', 'budget', 'completion').where('userid', id)
const editSiteInfo = (siteObject: any, id: number) => knex('siteInfo').where('userid', '=', id).update(siteObject)

export default {
    newSiteInfo,
    getSiteInfo,
    editSiteInfo
}