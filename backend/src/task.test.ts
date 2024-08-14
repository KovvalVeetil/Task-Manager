// // import request from 'supertest';
// // import { sequelize } from './index';
// // import Task from './models/Task';
// // import { app } from './index';

// // beforeAll(async () => {
// //   await sequelize.sync({ force: true }); // Reset the database before running tests
// // });

// // afterAll(async () => {
// //   await sequelize.close(); // Close the database connection after all tests are done
// // });

// // describe('Task API', () => {
// //   it('should create a new task', async () => {
// //     const response = await request(app)
// //       .post('/tasks')
// //       .send({
// //         title: 'Test Task',
// //         description: 'This is a test task',
// //         completed: false,
// //       });

// //     expect(response.status).toBe(201);
// //     expect(response.body.title).toBe('Test Task');
// //     expect(response.body.description).toBe('This is a test task');
// //     expect(response.body.completed).toBe(false);
// //   });

// //   it('should retrieve all tasks', async () => {
// //     const response = await request(app).get('/tasks');
// //     expect(response.status).toBe(200);
// //     expect(response.body.length).toBe(1);
// //   });

// //   // Additional tests for GET by ID, UPDATE, DELETE, etc.
// // });
import { sequelize } from './index'; // Adjust path if needed
import Task from "./models/Task"

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

test('should do something', async () => {
  // Your test code here
});

// import { sequelize } from './index'; // Import sequelize to connect to the DB
// import Task from './models/Task';

// describe('Task Model', () => {
//   beforeAll(async () => {
//     // Sync the database before running tests
//     await sequelize.sync({ force: true });
//   });

//   it('should create a new task', async () => {
//     const task = await Task.create({
//       title: 'Test Task',
//       description: 'This is a test task',
//       completed: false,
//     });

//     expect(task.id).toBeDefined();
//     expect(task.title).toBe('Test Task');
//     expect(task.description).toBe('This is a test task');
//     expect(task.completed).toBe(false);
//   });

//   // Additional tests for CRUD operations can be added here

//   afterAll(async () => {
//     // Close the database connection after tests
//     await sequelize.close();
//   });
// });

// import { sequelize } from './index'; // Import sequelize to connect to the DB
// import Task from './models/Task';

// beforeAll(async () => {
//   await sequelize.sync({ force: true }); // Ensure the database is reset before running tests
// });

// test('should create a task', async () => {
//   const task = await Task.create({
//     title: 'Test Task',
//     description: 'Test Description',
//     completed: false,
//   });
//   expect(task).toHaveProperty('id');
//   expect(task.title).toBe('Test Task');
// });
