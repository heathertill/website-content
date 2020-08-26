import {connection as knex} from '../index'

const getAboutInfo = (id: number) => knex('aboutInfo').select('userid', 'entryHistory', 'aboutYou', 'expSkills', 'portStyle', 'highlight', 'qualifications', 'serviceProd').where('userid', '=', id)
const newAboutInfo = (aboutObject: any) => knex('aboutInfo').insert(aboutObject);
const editAboutInfo = (aboutObject: any, id: number) => knex('aboutInfo').where('userid', '=', id).update(aboutObject);

export default {
    getAboutInfo,
    newAboutInfo,
    editAboutInfo
}