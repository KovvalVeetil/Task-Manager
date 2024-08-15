"use strict";
// // // import request from 'supertest';
// // // import { sequelize } from './index';
// // // import Task from './models/Task';
// // // import { app } from './index';
Object.defineProperty(exports, "__esModule", { value: true });
// // // beforeAll(async () => {
// // //   await sequelize.sync({ force: true }); // Reset the database before running tests
// // // });
// // // afterAll(async () => {
// // //   await sequelize.close(); // Close the database connection after all tests are done
// // // });
// // // describe('Task API', () => {
// // //   it('should create a new task', async () => {
// // //     const response = await request(app)
// // //       .post('/tasks')
// // //       .send({
// // //         title: 'Test Task',
// // //         description: 'This is a test task',
// // //         completed: false,
// // //       });
// // //     expect(response.status).toBe(201);
// // //     expect(response.body.title).toBe('Test Task');
// // //     expect(response.body.description).toBe('This is a test task');
// // //     expect(response.body.completed).toBe(false);
// // //   });
// // //   it('should retrieve all tasks', async () => {
// // //     const response = await request(app).get('/tasks');
// // //     expect(response.status).toBe(200);
// // //     expect(response.body.length).toBe(1);
// // //   });
// // //   // Additional tests for GET by ID, UPDATE, DELETE, etc.
// // // });
// // import { sequelize } from './index';
// // import Task from "./models/Task"
// // beforeAll(async () => {
// //   await sequelize.sync({ force: true });
// // });
// // afterAll(async () => {
// //   await sequelize.close();
// // });
// // // test('should do something', async () => {
// // //   // Your test code here
// // // });
// // describe('Task Model', () => {
// //   beforeAll(async () => {
// //     // Sync the database before running tests
// //     await sequelize.sync({ force: true });
// //   });
// //   it('should create a new task', async () => {
// //     const task = await Task.create({
// //       title: 'Test Task',
// //       description: 'This is a test task',
// //       completed: false,
// //     });
// //     expect(task.id).toBeDefined();
// //     expect(task.title).toBe('Test Task');
// //     expect(task.description).toBe('This is a test task');
// //     expect(task.completed).toBe(false);
// //   });
// //   // Additional tests for CRUD operations can be added here
// //   afterAll(async () => {
// //     // Close the database connection after tests
// //     await sequelize.close();
// //   });
// // });
// import request from 'supertest';
// import { sequelize } from './index';
// import Task from './models/Task';
// // Ensure the database is reset before running tests
// beforeAll(async () => {
//   await sequelize.sync({ force: true });
// });
// // Clean up after each test
// afterEach(async () => {
//   await sequelize.truncate({ cascade: true });
// });
// describe('Task API', () => {
//   // Test creating a new task
//   test('should create a new task', async () => {
//     const response = await request('http://localhost:3000')
//       .post('/tasks')
//       .send({
//         title: 'New Task',
//         description: 'New Task Description',
//         completed: false,
//       });
//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty('id');
//     expect(response.body.title).toBe('New Task');
//     expect(response.body.description).toBe('New Task Description');
//     expect(response.body.completed).toBe(false);
//   });
//   // Test getting all tasks
//   test('should get all tasks', async () => {
//     await Task.create({
//       title: 'Task 1',
//       description: 'Description 1',
//       completed: false,
//     });
//     await Task.create({
//       title: 'Task 2',
//       description: 'Description 2',
//       completed: true,
//     });
//     const response = await request('http://localhost:3000').get('/tasks');
//     expect(response.status).toBe(200);
//     expect(response.body.length).toBe(2);
//     expect(response.body[0]).toHaveProperty('title', 'Task 1');
//     expect(response.body[1]).toHaveProperty('title', 'Task 2');
//   });
//   // Test getting a single task by ID
//   test('should get a task by ID', async () => {
//     const task = await Task.create({
//       title: 'Single Task',
//       description: 'Single Task Description',
//       completed: false,
//     });
//     const response = await request('http://localhost:3000').get(`/tasks/${task.id}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('title', 'Single Task');
//   });
//   // Test updating a task
//   test('should update a task by ID', async () => {
//     const task = await Task.create({
//       title: 'Update Task',
//       description: 'Update Task Description',
//       completed: false,
//     });
//     const response = await request('http://localhost:3000')
//       .put(`/tasks/${task.id}`)
//       .send({
//         title: 'Updated Title',
//         description: 'Updated Description',
//         completed: true,
//       });
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('title', 'Updated Title');
//     expect(response.body).toHaveProperty('description', 'Updated Description');
//     expect(response.body).toHaveProperty('completed', true);
//   });
//   // Test deleting a task
//   test('should delete a task by ID', async () => {
//     const task = await Task.create({
//       title: 'Delete Task',
//       description: 'Delete Task Description',
//       completed: false,
//     });
//     const response = await request('http://localhost:3000').delete(`/tasks/${task.id}`);
//     expect(response.status).toBe(204);
//     // Verify that the task has been deleted
//     const getResponse = await request('http://localhost:3000').get(`/tasks/${task.id}`);
//     expect(getResponse.status).toBe(404);
//   });
// });
// // import { sequelize } from './index'; // Import sequelize to connect to the DB
// // import Task from './models/Task';
// // describe('Task Model', () => {
// //   beforeAll(async () => {
// //     // Sync the database before running tests
// //     await sequelize.sync({ force: true });
// //   });
// //   it('should create a new task', async () => {
// //     const task = await Task.create({
// //       title: 'Test Task',
// //       description: 'This is a test task',
// //       completed: false,
// //     });
// //     expect(task.id).toBeDefined();
// //     expect(task.title).toBe('Test Task');
// //     expect(task.description).toBe('This is a test task');
// //     expect(task.completed).toBe(false);
// //   });
// //   // Additional tests for CRUD operations can be added here
// //   afterAll(async () => {
// //     // Close the database connection after tests
// //     await sequelize.close();
// //   });
// // });
// // import { sequelize } from './index'; // Import sequelize to connect to the DB
// // import Task from './models/Task';
// // beforeAll(async () => {
// //   await sequelize.sync({ force: true }); // Ensure the database is reset before running tests
// // });
// // test('should create a task', async () => {
// //   const task = await Task.create({
// //     title: 'Test Task',
// //     description: 'Test Description',
// //     completed: false,
// //   });
// //   expect(task).toHaveProperty('id');
// //   expect(task.title).toBe('Test Task');
// // });
// import * as http from 'http';
// import express from 'express';
// import Task from './models/Task';
// import { sequelize } from './index';
// let server: http.Server;
// beforeAll(async () => {
//   // Setup Express server
//   const app = express();
//   app.use(express.json());
//   // Initialize CRUD operations
//   app.post('/tasks', async (req, res) => {
//     try {
//       const { title, description, completed } = req.body;
//       const task = await Task.create({ title, description, completed });
//       res.status(201).json(task);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   app.get('/tasks', async (req, res) => {
//     try {
//       const tasks = await Task.findAll();
//       res.status(200).json(tasks);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   app.get('/tasks/:id', async (req, res) => {
//     try {
//       const task = await Task.findByPk(req.params.id);
//       if (task) {
//         res.status(200).json(task);
//       } else {
//         res.status(404).json({ error: 'Task not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   app.put('/tasks/:id', async (req, res) => {
//     try {
//       const task = await Task.findByPk(req.params.id);
//       if (task) {
//         const { title, description, completed } = req.body;
//         task.title = title || task.title;
//         task.description = description || task.description;
//         task.completed = completed !== undefined ? completed : task.completed;
//         await task.save();
//         res.status(200).json(task);
//       } else {
//         res.status(404).json({ error: 'Task not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   app.delete('/tasks/:id', async (req, res) => {
//     try {
//       const task = await Task.findByPk(req.params.id);
//       if (task) {
//         await task.destroy();
//         res.status(204).send();
//       } else {
//         res.status(404).json({ error: 'Task not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
//   server = http.createServer(app);
//   await sequelize.sync({ force: true });
// });
// afterAll(async () => {
//   if (server) {
//     server.close();
//   }
//   await sequelize.close();
// });
// const makeRequest = (method: string, url: string, data?: any) => {
//   return new Promise((resolve, reject) => {
//     const options = {
//       method,
//       headers: { 'Content-Type': 'application/json' }
//     };
//     const req = http.request(url, options, (res) => {
//       let body = '';
//       res.on('data', (chunk) => { body += chunk; });
//       res.on('end', () => resolve({ statusCode: res.statusCode, body }));
//     });
//     req.on('error', (e) => reject(e));
//     if (data) {
//       req.write(JSON.stringify(data));
//     }
//     req.end();
//   });
// };
// test('should create a task', async () => {
//   const response = await makeRequest('POST', 'http://localhost:3000/tasks', {
//     title: 'Test Task',
//     description: 'Test Description',
//     completed: false
//   });
//   const task = JSON.parse(response.body);
//   expect(response.statusCode).toBe(201);
//   expect(task).toHaveProperty('id');
//   expect(task.title).toBe('Test Task');
// });
// test('should get all tasks', async () => {
//   await makeRequest('POST', 'http://localhost:3000/tasks', {
//     title: 'Test Task',
//     description: 'Test Description',
//     completed: false
//   });
//   const response = await makeRequest('GET', 'http://localhost:3000/tasks');
//   const tasks = JSON.parse(response.body);
//   expect(response.statusCode).toBe(200);
//   expect(tasks).toHaveLength(1);
// });
// test('should get a single task by ID', async () => {
//   const createResponse = await makeRequest('POST', 'http://localhost:3000/tasks', {
//     title: 'Test Task',
//     description: 'Test Description',
//     completed: false
//   });
//   const createdTask = JSON.parse(createResponse.body);
//   const response = await makeRequest('GET', `http://localhost:3000/tasks/${createdTask.id}`);
//   const task = JSON.parse(response.body);
//   expect(response.statusCode).toBe(200);
//   expect(task.title).toBe('Test Task');
// });
// test('should update a task by ID', async () => {
//   const createResponse = await makeRequest('POST', 'http://localhost:3000/tasks', {
//     title: 'Test Task',
//     description: 'Test Description',
//     completed: false
//   });
//   const createdTask = JSON.parse(createResponse.body);
//   const updateResponse = await makeRequest('PUT', `http://localhost:3000/tasks/${createdTask.id}`, {
//     title: 'Updated Task',
//     description: 'Updated Description',
//     completed: true
//   });
//   const updatedTask = JSON.parse(updateResponse.body);
//   expect(updateResponse.statusCode).toBe(200);
//   expect(updatedTask.title).toBe('Updated Task');
//   expect(updatedTask.completed).toBe(true);
// });
// test('should delete a task by ID', async () => {
//   const createResponse = await makeRequest('POST', 'http://localhost:3000/tasks', {
//     title: 'Test Task',
//     descri
const index_1 = require("./index");
const testUtils_1 = require("@utils/testUtils");
beforeAll(async () => {
    await index_1.sequelize.sync({ force: true }); // Ensure the database is reset before running tests
});
describe('Task CRUD Operations', () => {
    let taskId;
    // Test Create Task
    it('should create a task', async () => {
        const response = await testUtils_1.testUtils.post('/tasks', {
            title: 'Test Task',
            description: 'Test Description',
            completed: false,
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Test Task');
        taskId = response.body.id; // Save task ID for later tests
    });
    // Test Read All Tasks
    it('should get all tasks', async () => {
        const response = await testUtils_1.testUtils.get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0); // Assuming at least one task exists
    });
    // Test Read Single Task
    it('should get a task by ID', async () => {
        const response = await testUtils_1.testUtils.get(`/tasks/${taskId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', taskId);
        expect(response.body.title).toBe('Test Task');
    });
    // Test Update Task
    it('should update a task by ID', async () => {
        const response = await testUtils_1.testUtils.put(`/tasks/${taskId}`, {
            title: 'Updated Task',
            description: 'Updated Description',
            completed: true,
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', taskId);
        expect(response.body.title).toBe('Updated Task');
        expect(response.body.completed).toBe(true);
    });
    // Test Delete Task
    it('should delete a task by ID', async () => {
        const response = await testUtils_1.testUtils.delete(`/tasks/${taskId}`);
        expect(response.statusCode).toBe(204); // No content
    });
    // Optional: Test fetching the deleted task to ensure it's gone
    it('should not find a deleted task', async () => {
        const response = await testUtils_1.testUtils.get(`/tasks/${taskId}`);
        expect(response.statusCode).toBe(404); // Not found
    });
});
//# sourceMappingURL=task.test.js.map