import { PeopleRepository } from "../../../repositories/PeopleRepository";
import { ListPeopleUseCase } from "../useCase/ListPeopleUseCase";
import { ListPeopleController } from "../controller/ListPeopleController";

const peopleRepository = PeopleRepository.getInstance();

const peopleUseCase = new ListPeopleUseCase(peopleRepository);

const listPeopleController = new ListPeopleController(peopleUseCase);

export { listPeopleController };
