import { Router } from "express";

import { peopleRouter } from "../../modules/people/routes/routes";
import { vacancyRoutes } from "../../modules/vacancy/routes/routes";
import { candidatureRouter } from "../../modules/candidature/routes/routes";

const router = Router();

router.use("/vacancies", vacancyRoutes);
router.use("/people", peopleRouter);
router.use("/candidatures", candidatureRouter);

export { router };
