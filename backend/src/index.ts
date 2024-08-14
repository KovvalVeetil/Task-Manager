import express from 'express';
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

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  // Create Task
  app.post('/tasks', async (req, res) => {
    try {
      const { title, description, isCompleted } = req.body;
      const task = await Task.create({ title, description, isCompleted });
      res.status(201).json(task);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  });

 // Get All Tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

// Get Task by ID
app.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

// Update Task
app.put('/tasks/:id', async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body;
    const [updated] = await Task.update({ title, description, isCompleted }, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id);
      res.status(200).json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

// Delete Task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const deleted = await Task.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app, sequelize };
