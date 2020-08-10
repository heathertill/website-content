import config from '../config';
import * as knex from 'knex';

import Users from './queries/users';
import Tokens from './queries/tokens';
import ClientInfo from './queries/clientInfo';

export const connection = knex(config.knex);

export default {
    Users,
    Tokens,
    ClientInfo
}