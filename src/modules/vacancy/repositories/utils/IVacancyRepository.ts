import { Vacancy } from "../../models/Vacancy";
import { IVacancyDTO } from "./IVacancyDTO";

interface IVacancyRepository {
    list(): Vacancy[];
    findById(id: string): Vacancy;
    findByTitle(title: string): Vacancy;
    create({ company, description, level, location, title }: IVacancyDTO): void;
}

export { IVacancyRepository };
