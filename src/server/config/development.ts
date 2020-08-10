export default {
    knex: {
        client: 'mysql',
        connection: {
            connectionLimit: 10,
            user: 'webContent',
            password: 'blahblah',
            host: 'localhost',
            database: 'websiteContent'
        }
    },
    auth: {
        secret: 'foxmccloud'
    }
};