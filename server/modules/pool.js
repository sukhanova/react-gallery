const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'react_gallery',
    host: 'localhost',
    port: 5432
}

module.export = new Pool(config);