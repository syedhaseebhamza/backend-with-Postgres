import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Get database connection parameters from environment variables
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASSWORD || '6400';
const database = process.env.DB_NAME || 'postgres';
const port = process.env.DB_PORT || '5432';

// Create Sequelize instance with the correct parameters
const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: parseInt(port),
    dialect: "postgres",
    logging: false // Set to true for debugging SQL queries
}); 

const connection = async () => { 
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
};

export { sequelize, connection };