"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv = __importStar(require("dotenv"));
const express = require("express");
//import express, { Request, Response } from 'express';
const sequelize_1 = require("sequelize");
// Load environment variables from .env file
dotenv.config();
// Initialize Sequelize instance
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'task_manager', process.env.DB_USER || 'task_manager_user', process.env.DB_PASSWORD || 'new_password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
});
exports.sequelize = sequelize;
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
    app.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, completed } = req.body;
            const task = yield Task.create({ title, description, completed });
            res.status(201).json(task);
        }
        catch (error) {
            console.error('Error creating task:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    // Get all tasks
    app.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tasks = yield Task.findAll();
            res.status(200).json(tasks);
        }
        catch (error) {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    // Get a single task by ID
    app.get('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const task = yield Task.findByPk(req.params.id);
            if (task) {
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ error: 'Task not found' });
            }
        }
        catch (error) {
            console.error('Error fetching task:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    // Update a task by ID
    app.put('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const task = yield Task.findByPk(req.params.id);
            if (task) {
                const { title, description, completed } = req.body;
                task.title = title || task.title;
                task.description = description || task.description;
                task.completed = completed !== undefined ? completed : task.completed;
                yield task.save();
                res.status(200).json(task);
            }
            else {
                res.status(404).json({ error: 'Task not found' });
            }
        }
        catch (error) {
            console.error('Error updating task:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
    // Delete a task by ID
    app.delete('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const task = yield Task.findByPk(req.params.id);
            if (task) {
                yield task.destroy();
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Task not found' });
            }
        }
        catch (error) {
            console.error('Error deleting task:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }));
})
    .catch((error) => console.error('Unable to connect to the database:', error));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
