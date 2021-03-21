import { IPeopleRepository } from "../../../repositories/utils/IPeopleRepository";
import { IPeopleDTO } from "../../../repositories/utils/IPeopleDTO";

class CreatePeopleUseCase {
    constructor(private peopleRepository: IPeopleRepository) {}

    execute({ job, level, location, name }: IPeopleDTO): void {
        const personAlreadyExists = this.peopleRepository.findByName(name);

        if (personAlreadyExists) throw new Error("Vacancy already exists!");

        this.peopleRepository.create({ job, level, location, name });
    }
}

export { CreatePeopleUseCase };
