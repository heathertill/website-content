import { connection as knex } from '../index';

const all = () => knex('books').select('books.id', 'books.title', 'books.author', 'books.price', 'categories.name as category', 'categories.id as categoryid').join('categories', 'books.categoryid', '=', 'categories.id');
const newBook = (bookObject: any) => knex('books').insert(bookObject);

const newClientInfo = (clientObject: any) => knex('clientInfo').insert(clientObject);

export default {
newClientInfo
}
