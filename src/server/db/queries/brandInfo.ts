import { connection as knex } from '../index';

const getBrandInfo = (id: number) => knex('brandInfo').select('userid', 'purpose', 'audience', 'competition', 'siteAction', 'tagline', 'greatness').where('userid', '=', id)
const newBrandInfo = (brandObject: any) => knex('brandInfo').insert(brandObject);
const editBrandInfo = (brandObject: any, id: number) => knex('brandInfo').where('userid', '=', id).update(brandObject)

export default {
    getBrandInfo,
    newBrandInfo,
    editBrandInfo
}