# Task-Manager

node backend/dist/index.js shoudl return Database and tables created

Compile and run:

npx tsc -p backend/tsconfig.json
node backend/dist/testTaskCreation.js 


Testing all endpoints:

Open the server and connect to the database:
- npx tsc -p backend/tsconfig.json
- node backend/dist/index.js
Server is running on port 3000
Database & tables created!

Use a tool like Postman or curl to test your endpoints.

Create Task:

bash
Copy code
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "New Task", "description": "Task description", "isCompleted": false}'
Get All Tasks:

bash
Copy code
curl http://localhost:3000/tasks
Get Task by ID:

bash
Copy code
curl http://localhost:3000/tasks/1
Update Task:

bash
Copy code
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "description": "Updated description", "isCompleted": true}'
Delete Task:

bash
Copy code
curl -X DELETE http://localhost:3000/tasks/1