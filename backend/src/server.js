const express = require ("express");
const routes = require ("./routes");
const connectDatabase = require ("./db/connect");
const cors = require("cors");

const app = express();

app.use(cors());
connectDatabase();
app.use(express.json());
app.use(routes);

app.listen(3000);