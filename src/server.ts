import express from "express";
import { createCourse } from "./routes/routes";

const app = express();

app.get("/", createCourse);

app.listen(3333, () => console.log("Server is Running!"));
