import { Router } from "express";

import { createCandidatureController } from "../useCases/create/service";
import { listCandidatureController } from "../useCases/list/service";

const candidatureRouter = Router();

candidatureRouter.post("/", (request, response) => {
    return createCandidatureController.handle(request, response);
});

candidatureRouter.get("/", (request, response) => {
    return listCandidatureController.handle(request, response);
});

export { candidatureRouter };
