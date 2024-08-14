"use strict";
// import express from 'express';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Task Manager API');
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// import { Sequelize } from 'sequelize';
// // Initialize Sequelize
// const sequelize = new Sequelize('task_manager', 'task_manager_user', 'your_password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });
// // Sync database and models
// sequelize.sync()
//   .then(() => console.log('Database & tables created!'))
//   .catch((error) => console.error('Unable to connect to the database:', error));
// export { sequelize };
const dotenv = __importStar(require("dotenv"));
dotenv.config(); // Load environment variables from .env file
const sequelize_1 = require("sequelize");
// Create a Sequelize instance
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'task_manager', process.env.DB_USER || 'task_manager_user', process.env.DB_PASSWORD || 'your_password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
});
exports.sequelize = sequelize;
// Synchronize the database and handle any connection errors
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch((error) => console.error('Unable to connect to the database:', error));
