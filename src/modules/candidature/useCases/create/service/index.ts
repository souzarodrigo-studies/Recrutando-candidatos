import { CandidatureRepository } from "../../../repositories/CandidatureRepository";
import { CreateCandidatureUseCase } from "../useCase/CreateCandidatureUseCase";
import { VacancyRepository } from "../../../../vacancy/repositories/VacancyRepository";
import { PeopleRepository } from "../../../../people/repositories/PeopleRepository";
import { CreateCandidatureController } from "../controller/CreateCandidatureController";

const candidatureRepository = CandidatureRepository.getInstance();

const peopleRepository = PeopleRepository.getInstance();
const vacancyRepository = VacancyRepository.getInstance();

const createCandidatureUseCase = new CreateCandidatureUseCase(
    candidatureRepository,
    vacancyRepository,
    peopleRepository
);

const createCandidatureController = new CreateCandidatureController(
    createCandidatureUseCase
);

export { createCandidatureController };
