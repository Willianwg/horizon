const express = require ("express");
const routes = require ("./routes");
const connectDatabase = require ("./db/connect");
const cors = require("cors");
const path = require("path");
const { redisClient } = require("./connect/redis");

const app = express();

app.use(cors());
connectDatabase();
app.use(express.json());
app.use("/files", express.static(path.resolve (__dirname, "..", "uploads")));
app.use(routes);

async function main(){
    app.listen(3000);
}

main();