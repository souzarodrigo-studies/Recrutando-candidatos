import { VacancyRepository } from "../../../repositories/VacancyRepository";
import { ListVacancyUseCase } from "../useCase/ListVacancyUseCase";
import { ListVacancyController } from "../controller/ListVacancyController";

const vacancyRepository = VacancyRepository.getInstance();
const listVacancyUseCase = new ListVacancyUseCase(vacancyRepository);
const listVacancyController = new ListVacancyController(listVacancyUseCase);

export { listVacancyController };
