import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { Task } from './models/Task';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'task_manager',
  process.env.DB_USER || 'task_manager_user',
  process.env.DB_PASSWORD || 'your_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: console.log,  // Enable SQL query logging
  }
);

async function testTaskCreation() {
  try {
    await sequelize.sync({ force: true }); // Ensure the table is recreated
    const newTask = await Task.create({
      title: 'Test Task',
      description: 'This is a test task',
    });
    console.log('Task created:', newTask.toJSON());
  } catch (error) {
    console.error('Error creating task:', error);
  } finally {
    await sequelize.close(); // Close the connection
  }
}

testTaskCreation();
