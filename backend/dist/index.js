"use strict";
// // import express from 'express';
// // import * as dotenv from 'dotenv';
// // dotenv.config(); // Load environment variables from .env file
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// // import { Sequelize } from 'sequelize';
// // import Task from "./models/Task";
// // // Create a Sequelize instance
// // const sequelize = new Sequelize(
// //   process.env.DB_NAME || 'task_manager',
// //   process.env.DB_USER || 'task_manager_user',
// //   process.env.DB_PASSWORD || 'new_password',
// //   {
// //     host: process.env.DB_HOST || 'localhost',
// //     dialect: 'postgres',
// //   }
// // );
// // async function testTaskModel() {
// //   try {
// //     const newTask = await Task.create({
// //       title: 'Test Task',
// //       description: 'This is a test task',
// //     });
// //     console.log('Task created:', newTask.toJSON());
// //   } catch (error) {
// //     console.error('Error creating task:', error);
// //   }
// // }
// // sequelize.sync()
// //   .then(() => {
// //     console.log('Database & tables created!');
// //     testTaskModel();
// //   })
// //   .catch((error) => console.error('Unable to connect to the database:', error));
// //   const app = express();
// //   const port = process.env.PORT || 3000;
// //   app.use(express.json());
// //   // Create Task
// //   app.post('/tasks', async (req, res) => {
// //     try {
// //       const { title, description, isCompleted } = req.body;
// //       const task = await Task.create({ title, description, isCompleted });
// //       res.status(201).json(task);
// //     } catch (error: unknown) {
// //       if (error instanceof Error) {
// //         res.status(500).json({ error: error.message });
// //       } else {
// //         res.status(500).json({ error: 'An unknown error occurred' });
// //       }
// //     }
// //   });
// //  // Get All Tasks
// // app.get('/tasks', async (req, res) => {
// //   try {
// //     const tasks = await Task.findAll();
// //     res.status(200).json(tasks);
// //   } catch (error: unknown) {
// //     if (error instanceof Error) {
// //       res.status(500).json({ error: error.message });
// //     } else {
// //       res.status(500).json({ error: 'An unknown error occurred' });
// //     }
// //   }
// // });
// // // Get Task by ID
// // app.get('/tasks/:id', async (req, res) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       res.status(200).json(task);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error: unknown) {
// //     if (error instanceof Error) {
// //       res.status(500).json({ error: error.message });
// //     } else {
// //       res.status(500).json({ error: 'An unknown error occurred' });
// //     }
// //   }
// // });
// // // Update Task
// // app.put('/tasks/:id', async (req, res) => {
// //   try {
// //     const { title, description, isCompleted } = req.body;
// //     const [updated] = await Task.update({ title, description, isCompleted }, {
// //       where: { id: req.params.id },
// //     });
// //     if (updated) {
// //       const updatedTask = await Task.findByPk(req.params.id);
// //       res.status(200).json(updatedTask);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error: unknown) {
// //     if (error instanceof Error) {
// //       res.status(500).json({ error: error.message });
// //     } else {
// //       res.status(500).json({ error: 'An unknown error occurred' });
// //     }
// //   }
// // });
// // // Delete Task
// // app.delete('/tasks/:id', async (req, res) => {
// //   try {
// //     const deleted = await Task.destroy({
// //       where: { id: req.params.id },
// //     });
// //     if (deleted) {
// //       res.status(204).send();
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error: unknown) {
// //     if (error instanceof Error) {
// //       res.status(500).json({ error: error.message });
// //     } else {
// //       res.status(500).json({ error: 'An unknown error occurred' });
// //     }
// //   }
// // });
// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });
// // export { app, sequelize };
// // backend/src/index.ts
// // import * as dotenv from 'dotenv';
// // import express, { Request, Response } from 'express';
// // import { Sequelize } from 'sequelize';
// // import Task from './models/Task';
// // // Load environment variables from .env file
// // dotenv.config();
// // // Initialize Sequelize instance
// // const sequelize = new Sequelize(
// //   process.env.DB_NAME || 'task_manager',
// //   process.env.DB_USER || 'task_manager_user',
// //   process.env.DB_PASSWORD || 'new_password',
// //   {
// //     host: process.env.DB_HOST || 'localhost',
// //     dialect: 'postgres',
// //   }
// // );
// // // Initialize Express app
// // const app = express();
// // app.use(express.json());
// // // Sync database models
// // sequelize.sync()
// //   .then(() => console.log('Database & tables created!'))
// //   .catch((error) => console.error('Unable to connect to the database:', error));
// // // CRUD Operations
// // // Create a new task
// // app.post('/tasks', async (req: Request, res: Response) => {
// //   try {
// //     const { title, description, completed } = req.body;
// //     const task = await Task.create({ title, description, completed });
// //     res.status(201).json(task);
// //   } catch (error) {
// //     console.error('Error creating task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Get all tasks
// // app.get('/tasks', async (req: Request, res: Response) => {
// //   try {
// //     const tasks = await Task.findAll();
// //     res.status(200).json(tasks);
// //   } catch (error) {
// //     console.error('Error fetching tasks:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Get a single task by ID
// // app.get('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       res.status(200).json(task);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error fetching task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Update a task by ID
// // app.put('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       const { title, description, completed } = req.body;
// //       task.title = title || task.title;
// //       task.description = description || task.description;
// //       task.completed = completed !== undefined ? completed : task.completed;
// //       await task.save();
// //       res.status(200).json(task);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error updating task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Delete a task by ID
// // app.delete('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       await task.destroy();
// //       res.status(204).send();
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error deleting task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Start the server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// // // Export sequelize for use in other modules
// // export { sequelize };
// // backend/src/index.ts
// import * as dotenv from 'dotenv';
// import express, { Request, Response } from 'express';
// import { Sequelize } from 'sequelize';
// import Task from './models/Task';
// // Load environment variables from .env file
// dotenv.config();
// // Initialize Sequelize instance
// const sequelize = new Sequelize(
//   process.env.DB_NAME || 'task_manager',
//   process.env.DB_USER || 'task_manager_user',
//   process.env.DB_PASSWORD || 'new_password',
//   {
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'postgres',
//   }
// );
// // Initialize Express app
// const app = express();
// app.use(express.json());
// // CRUD Operations
// // Create a new task
// app.post('/tasks', async (req: Request, res: Response) => {
//   try {
//     const { title, description, completed } = req.body;
//     const task = await Task.create({ title, description, completed });
//     res.status(201).json(task);
//   } catch (error) {
//     console.error('Error creating task:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // // Get all tasks
// // app.get('/tasks', async (req: Request, res: Response) => {
// //   try {
// //     const tasks = await Task.findAll();
// //     res.status(200).json(tasks);
// //   } catch (error) {
// //     console.error('Error fetching tasks:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Get a single task by ID
// // app.get('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       res.status(200).json(task);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error fetching task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Update a task by ID
// // app.put('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       const { title, description, completed } = req.body;
// //       task.title = title || task.title;
// //       task.description = description || task.description;
// //       task.completed = completed !== undefined ? completed : task.completed;
// //       await task.save();
// //       res.status(200).json(task);
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error updating task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // // Delete a task by ID
// // app.delete('/tasks/:id', async (req: Request, res: Response) => {
// //   try {
// //     const task = await Task.findByPk(req.params.id);
// //     if (task) {
// //       await task.destroy();
// //       res.status(204).send();
// //     } else {
// //       res.status(404).json({ error: 'Task not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error deleting task:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });
// // Sync database models
// sequelize.sync()
//   .then(() => console.log('Database & tables created!'))
//   .catch((error) => console.error('Unable to connect to the database:', error));
// // CRUD Operations
// // (Your CRUD operations code here)
// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// // Export sequelize for use in other modules
// export { sequelize };
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
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
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
    // Other CRUD operations go here
})
    .catch((error) => console.error('Unable to connect to the database:', error));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
