import { connection as knex } from '../index';

const newBrandInfo = (BrandObject: any) => knex('BrandInfo').insert(BrandObject);


export default {
newBrandInfo
}