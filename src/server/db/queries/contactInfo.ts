import { connection as knex } from '../index';

const getContactInfo = (id: number) => knex('contactInfo').select().where('userid', '=', id);
const newContactInfo = (contactObject: any) => knex('contactInfo').insert(contactObject);
const editContactInfo = (contactObject: any, id: number) => knex('contactInfo').where('userid', '=', id).update(contactObject);

export default {
    getContactInfo,
    newContactInfo,
    editContactInfo
}