//import request from 'supertest';
import request = require("supertest")
import express = require("express")
import { sequelize } from './index'; // Import sequelize to connect to the DB
import Task from './models/Task'; // Import Task model

// Create a new Express app for testing
const app = express();
app.use(express.json());

// Define the route handlers directly in the test file for simplicity
app.post('/tasks', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({ title, description, completed });
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Test suite
describe('POST /tasks', () => {
  beforeAll(async () => {
    // Sync database before running tests
    await sequelize.sync({ force: true }); // Use force: true to reset the database
  });

  afterAll(async () => {
    // Close database connection after tests
    await sequelize.close();
  });

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
        completed: false,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Task');
    expect(response.body.description).toBe('This is a test task');
    expect(response.body.completed).toBe(false);
  });

  it('should handle missing title', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        description: 'This is a test task without title',
        completed: false,
      });

    expect(response.status).toBe(500); // update this to say 400
  });
});
