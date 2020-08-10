import { connection as knex } from '../index';

const newUser = (userBody: any) => knex('users').insert(userBody);
const findOneByEmail = (email: string) => knex('users').where('email', email).select().limit(1);
const findOneById = (id: number) => knex('users').select().where('id', id);


export default {
    newUser,
    findOneByEmail,
    findOneById
}