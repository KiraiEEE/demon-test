import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

export const sequelize = new Sequelize(
    process.env.DB_NAME_DEV,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
<<<<<<< HEAD
        dialect: 'mysql'
=======
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306
>>>>>>> master
    }
);

// import config from "./config.json" assert {type: 'json'};

// const env = process.env.NODE_ENV || 'development'

// export const sequelize = new Sequelize(
//     config[env].database,
//     config[env].username,
//     config[env].password,
//     {
//         host: config[env].host,
//         dialect: config[env].dialect
// });