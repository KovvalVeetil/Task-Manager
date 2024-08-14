import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

// Load environment variables from .env file
dotenv.config();

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME || 'task_manager',
  process.env.DB_USER || 'task_manager_user',
  process.env.DB_PASSWORD || 'new_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

// Initialize Express app
const app = express();
app.use(express.json());

// Sync database models
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    // Import Task model only after sync
    const Task = require('./models/Task').default;

    // CRUD Operations

    // Create a new task
    app.post('/tasks', async (req: Request, res: Response) => {
      try {
        const { title, description, completed } = req.body;
        const task = await Task.create({ title, description, completed });
        res.status(201).json(task);
      } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    // Get all tasks
    app.get('/tasks', async (req: Request, res: Response) => {
      try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    // Get a single task by ID
    app.get('/tasks/:id', async (req: Request, res: Response) => {
      try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
          res.status(200).json(task);
        } else {
          res.status(404).json({ error: 'Task not found' });
        }
      } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    // Update a task by ID
    app.put('/tasks/:id', async (req: Request, res: Response) => {
      try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
          const { title, description, completed } = req.body;
          task.title = title || task.title;
          task.description = description || task.description;
          task.completed = completed !== undefined ? completed : task.completed;
          await task.save();
          res.status(200).json(task);
        } else {
          res.status(404).json({ error: 'Task not found' });
        }
      } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    // Delete a task by ID
    app.delete('/tasks/:id', async (req: Request, res: Response) => {
      try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
          await task.destroy();
          res.status(204).send();
        } else {
          res.status(404).json({ error: 'Task not found' });
        }
      } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });


  })
  .catch((error) => console.error('Unable to connect to the database:', error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export sequelize for use in other modules
export { sequelize };
