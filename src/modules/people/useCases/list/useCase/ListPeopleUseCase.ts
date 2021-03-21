import { IPeopleRepository } from "../../../repositories/utils/IPeopleRepository";
import { People } from "../../../models/people";

class ListPeopleUseCase {
    constructor(private peopleRepository: IPeopleRepository) {}

    execute(): People[] {
        return this.peopleRepository.list();
    }
}

export { ListPeopleUseCase };
