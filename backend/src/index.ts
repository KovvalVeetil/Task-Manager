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
// const sequelize = new Sequelize('task_manager', 'task_manager_user', 'new_password', {
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
import Task from "./models/Task";

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'task_manager',
  process.env.DB_USER || 'task_manager_user',
  process.env.DB_PASSWORD || 'new_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

async function testTaskModel() {
  try {
    const newTask = await Task.create({
      title: 'Test Task',
      description: 'This is a test task',
    });
    console.log('Task created:', newTask.toJSON());
  } catch (error) {
    console.error('Error creating task:', error);
  }
}

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    testTaskModel();
  })
  .catch((error) => console.error('Unable to connect to the database:', error));


export { sequelize };
