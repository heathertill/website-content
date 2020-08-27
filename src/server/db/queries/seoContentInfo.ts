import { connection as knex } from '../index';

const getSeoContentInfo = (id: number) => knex('seoContentInfo').select().where('userid', '=', id);
const newSeoContentInfo = (seoObject: any) => knex('seoContentInfo').insert(seoObject);
const editSeoContentInfo = (seoObject: any, id: number) => knex('seoContentInfo').where('userid', '=', id).insert(seoObject);

export default {
    getSeoContentInfo,
    newSeoContentInfo,
    editSeoContentInfo
}