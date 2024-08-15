"use strict";
// import { sequelize } from './index'; // Adjust path if needed
// import Task from "./models/Task"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// beforeAll(async () => {
//   await sequelize.sync({ force: true });
// });
// afterAll(async () => {
//   await sequelize.close();
// });
// test('should do something', async () => {
//   // Your test code here
// });
//import request from 'supertest';
const request = require("supertest");
const express = require("express");
const index_1 = require("./index"); // Import sequelize to connect to the DB
const Task_1 = __importDefault(require("./models/Task")); // Import Task model
// Create a new Express app for testing
const app = express();
app.use(express.json());
// Define the route handlers directly in the test file for simplicity
app.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, completed } = req.body;
        const task = yield Task_1.default.create({ title, description, completed });
        res.status(201).json(task);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Test suite
describe('POST /tasks', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Sync database before running tests
        yield index_1.sequelize.sync({ force: true }); // Use force: true to reset the database
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Close database connection after tests
        yield index_1.sequelize.close();
    }));
    it('should create a new task', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app)
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
    }));
    it('should handle missing title', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app)
            .post('/tasks')
            .send({
            description: 'This is a test task without title',
            completed: false,
        });
        expect(response.status).toBe(400); // Adjust status code based on how you handle validation errors
    }));
});
