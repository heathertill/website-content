import { connection as knex } from '../index';

const getBrandInfo = (id: number) => knex('brandInfo').select('userid', 'purpose', 'audience', 'competition', 'siteAction', 'tagline', 'greatness').where('userid', '=', id)
const newBrandInfo = (BrandObject: any) => knex('brandInfo').insert(BrandObject);

export default {
    getBrandInfo,
    newBrandInfo
}