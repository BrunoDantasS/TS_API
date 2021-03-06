import "./config/env";
import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import routes from "./routes";

const app = express();
createConnection();

app.use(express.json());
app.use(routes);

app.listen(3333);

