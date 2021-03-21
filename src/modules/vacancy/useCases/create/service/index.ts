import { VacancyRepository } from "../../../repositories/VacancyRepository";
import { CreateVacancyUseCase } from "../useCase/CreateVacancyUseCase";
import { CreateVacancyController } from "../controller/CreateVacancyController";

const vacancyRepository = VacancyRepository.getInstance();

const createVacancyUseCase = new CreateVacancyUseCase(vacancyRepository);

const createVacancyController = new CreateVacancyController(
    createVacancyUseCase
);

export { createVacancyController };
