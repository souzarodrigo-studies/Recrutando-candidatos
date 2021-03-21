import { Router } from "express";
import { createVacancyController } from "../useCases/create/service";
import { listVacancyController } from "../useCases/list/service";

const vacancyRoutes = Router();

vacancyRoutes.post("/", (request, response) => {
    return createVacancyController.handle(request, response);
});

vacancyRoutes.get("/", (request, response) => {
    return listVacancyController.handle(request, response);
});

export { vacancyRoutes };
