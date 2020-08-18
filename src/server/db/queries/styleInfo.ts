import { connection as knex } from '../index';

const getStyleInfo = (id: number) => knex('styleInfo').select('userid', 'logo', 'style', 'color', 'standards', 'printMaterial', 'fonts', 'photoService', 'websites', 'webLikesDis', 'features').where('userid', '=', id)
const newStyleInfo = (styleObject: any) => knex('styleInfo').insert(styleObject);
const editStyleInfo = (styleObject: any, id: number) => knex('styleInfo').where('userid', '=', id).update(styleObject);

export default {
    getStyleInfo,
    newStyleInfo,
    editStyleInfo
}