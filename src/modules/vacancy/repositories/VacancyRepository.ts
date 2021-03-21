import { Vacancy } from "../models/Vacancy";
import { IVacancyDTO } from "./utils/IVacancyDTO";
import { IVacancyRepository } from "./utils/IVacancyRepository";

class VacancyRepository implements IVacancyRepository {
    protected vacancies: Vacancy[];

    private static INSTANCE: VacancyRepository;

    private constructor() {
        this.vacancies = [];
    }

    public static getInstance(): VacancyRepository {
        if (!VacancyRepository.INSTANCE)
            VacancyRepository.INSTANCE = new VacancyRepository();

        return VacancyRepository.INSTANCE;
    }

    list(): Vacancy[] {
        return this.vacancies;
    }

    findById(id: string): Vacancy {
        return this.vacancies.find((vacancy) => vacancy.id === id);
    }

    findByTitle(title: string): Vacancy {
        return this.vacancies.find((vacancy) => vacancy.title === title);
    }

    create({
        company,
        description,
        level,
        location,
        title,
    }: IVacancyDTO): void {
        const vacancy = new Vacancy();

        Object.assign(vacancy, {
            company,
            description,
            level,
            location,
            title,
        });

        this.vacancies.push(vacancy);
    }
}

export { VacancyRepository };
