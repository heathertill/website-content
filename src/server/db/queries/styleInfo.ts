import { connection as knex } from '../index';

const newStyleInfo = (styleObject: any) => knex('styleInfo').insert(styleObject);
const editStyleInfo = (styleObject: any, id: number) => knex('styleInfo').where('userid', '=', id).update(styleObject);

export default {
    newStyleInfo,
    editStyleInfo
}