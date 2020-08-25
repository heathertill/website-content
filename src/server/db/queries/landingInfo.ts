import { connection as knex } from '../index';

const getLandingInfo = (id: number) => knex('landingInfo').select('userid', 'siteEntry', 'branding', 'callToAction', 'simWebFunc').where('userid', '=', id);
const newLandingInfo = (landingObject: any) => knex('landingInfo').insert(landingObject);
const editLandingInfo = (landingObject: any, id: number) => knex('landingInfo').where('userid', '=', id).update(landingObject);


export default {
    getLandingInfo,
    newLandingInfo,
    editLandingInfo
}