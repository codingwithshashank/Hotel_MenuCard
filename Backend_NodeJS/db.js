const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Hotal_Project',
    password: 'shashank@2024',
    port: 5432,
});
module.exports = pool;