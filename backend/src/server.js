const express = require ("express");
const routes = require ("./routes");
const connectDatabase = require ("./db/connect");

const app = express();

connectDatabase();

app.use(express.json());
app.use(routes);

app.listen(3000);