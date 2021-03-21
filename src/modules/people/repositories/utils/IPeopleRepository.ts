import { People } from "../../models/people";
import { IPeopleDTO } from "./IPeopleDTO";

interface IPeopleRepository {
    list(): People[];
    findById(id: string): People;
    findByName(name: string): People;
    create({ name, job, level, location }: IPeopleDTO): void;
}

export { IPeopleRepository };
