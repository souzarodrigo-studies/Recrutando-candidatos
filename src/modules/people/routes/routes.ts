import { Router } from "express";

import { createPeopleController } from "../useCases/create/service";
import { listPeopleController } from "../useCases/list/service";

const peopleRouter = Router();

peopleRouter.post("/", (request, response) => {
    return createPeopleController.handle(request, response);
});

peopleRouter.get("/", (request, response) => {
    return listPeopleController.handle(request, response);
});

export { peopleRouter };
