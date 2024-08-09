"use strict";
// import express from 'express';
// import cors from 'cors';
// import { Sequelize } from 'sequelize';
// //import taskRoutes from './routes/tasks';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// const app = express();
// const port = process.env.PORT || 3000;
// // Database setup
// const sequelize = new Sequelize('task_manager', 'user', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });
// // Middleware
// app.use(cors());
// app.use(express.json());
// // Routes
// //app.use('/api/v1/tasks', taskRoutes);
// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const sequelize_1 = require("sequelize");
// Initialize Sequelize
const sequelize = new sequelize_1.Sequelize('task_manager', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});
exports.sequelize = sequelize;
// Sync database and models
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch((error) => console.error('Unable to connect to the database:', error));
