import { Vacancy } from "../../../models/Vacancy";
import { IVacancyRepository } from "../../../repositories/utils/IVacancyRepository";

class ListVacancyUseCase {
    constructor(private vacancyRepository: IVacancyRepository) {}

    execute(): Vacancy[] {
        return this.vacancyRepository.list();
    }
}

export { ListVacancyUseCase };
