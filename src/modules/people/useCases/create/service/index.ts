import { PeopleRepository } from "../../../repositories/PeopleRepository";
import { CreatePeopleUseCase } from "../useCase/CreatePeopleUseCase";
import { CreatePeopleController } from "../controller/CreatePeopleController";

const peopleRepository = PeopleRepository.getInstance();
const createPeopleUseCase = new CreatePeopleUseCase(peopleRepository);
const createPeopleController = new CreatePeopleController(createPeopleUseCase);

export { createPeopleController };
