// import express from 'express';

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

import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import { Sequelize } from 'sequelize';

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'task_manager',
  process.env.DB_USER || 'task_manager_user',
  process.env.DB_PASSWORD || 'your_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

// Synchronize the database and handle any connection errors
sequelize.sync()
  .then(() => console.log('Database & tables created!'))
  .catch((error) => console.error('Unable to connect to the database:', error));

export { sequelize };
