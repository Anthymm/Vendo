import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

export { client };

import express from "express";
import path from "path";

import userRoutes from "./routes/userRoutes";

const app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "dist")));

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
