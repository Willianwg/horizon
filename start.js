const command = require("child_process");

command.exec("cd frontend && npm install && npm run dev");
command.exec("cd backend && npm install && docker-compose up -d && npm run dev");