import express from "express";

import { router } from "./middleware/router";

const app = express();

app.use(express.json());

app.use("/v1", router);

app.listen(3333, () => console.log("Server is Running!"));
