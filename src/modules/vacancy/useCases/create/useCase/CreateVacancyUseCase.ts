import { IVacancyDTO } from "../../../repositories/utils/IVacancyDTO";
import { IVacancyRepository } from "../../../repositories/utils/IVacancyRepository";

class CreateVacancyUseCase {
    constructor(private vacancyRepository: IVacancyRepository) {}

    execute({
        title,
        location,
        level,
        description,
        company,
    }: IVacancyDTO): void {
        const vacancyAlreadyExists = this.vacancyRepository.findByTitle(title);

        if (vacancyAlreadyExists) throw new Error("Vacancy already exists!");

        this.vacancyRepository.create({
            title,
            location,
            level,
            description,
            company,
        });
    }
}

export { CreateVacancyUseCase };
