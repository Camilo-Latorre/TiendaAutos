import  Sequelize from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

 export const sequelize = new Sequelize(
        "ParcialFinal",
        "postgres",
        "Camilolatorre11", 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
      }
    );

