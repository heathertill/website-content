import { connection as knex } from '../index';

const newSiteInfo = (bookObject: any) => knex('books').insert(bookObject);

export default {
    newSiteInfo
}