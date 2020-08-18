import { connection as knex } from '../index';

const getClientInfo = (id: number) => knex('clientInfo').select('userid', 'firstName', 'lastName', 'workNumber', 'cellNumber', 'email').where('userid', id)
const newClientInfo = (clientObject: any) => knex('clientInfo').insert(clientObject);
const editClient = (clientObject: any, id: number) => knex('clientInfo').where('userid', '=', id).update(clientObject)

export default {
    newClientInfo,
    getClientInfo,
    editClient
}
