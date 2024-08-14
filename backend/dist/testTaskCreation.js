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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const sequelize_1 = require("sequelize");
const Task_1 = __importDefault(require("./models/Task"));
// import { Task } from "./models/Task";
dotenv.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'task_manager', process.env.DB_USER || 'task_manager_user', process.env.DB_PASSWORD || 'your_password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: console.log,
});
function testTaskCreation() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.sync({ force: true }); // Ensure the table is recreated
            const newTask = yield Task_1.default.create({
                title: 'Test Task',
                description: 'This is a test task',
            });
            console.log('Task created:', newTask.toJSON());
        }
        catch (error) {
            console.error('Error creating task:', error);
        }
        finally {
            yield sequelize.close(); // Close the connection
        }
    });
}
testTaskCreation();
