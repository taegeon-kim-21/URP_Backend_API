const dbConfig = require("../config/dbConfig.js");

const {Sequelize, DataTypes} = require('sequelize');


const sequalize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    // can skip
    pool: { 
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }

});

sequalize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }
    )
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    }
    );

const db = {};
db.sequalize = Sequelize;
db.sequalize = sequalize;

db.products = require("./model.js")(sequalize, DataTypes);


db.sequalize.sync({force : false})
    .then(() => {
        console.log('Drop and Resync with { force: true }');
    }
    );

module.exports = db;
