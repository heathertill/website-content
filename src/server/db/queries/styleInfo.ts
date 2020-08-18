import { connection as knex } from '../index';

const newStyleInfo = (styleObject: any) => knex('styleInfo').insert(styleObject);

export default {
newStyleInfo
}