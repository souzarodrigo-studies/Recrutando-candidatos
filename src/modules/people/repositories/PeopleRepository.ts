import { People } from "../models/people";
import { IPeopleDTO } from "./utils/IPeopleDTO";
import { IPeopleRepository } from "./utils/IPeopleRepository";

class PeopleRepository implements IPeopleRepository {
    protected people: People[];

    private static INSTANCE: PeopleRepository;

    private constructor() {
        this.people = [];
    }

    public static getInstance(): PeopleRepository {
        if (!PeopleRepository.INSTANCE)
            PeopleRepository.INSTANCE = new PeopleRepository();

        return PeopleRepository.INSTANCE;
    }

    list(): People[] {
        return this.people;
    }

    findById(id: string): People {
        return this.people.find((person) => person.id === id);
    }

    findByName(name: string): People {
        return this.people.find((person) => person.name === name);
    }

    create({ name, job, level, location }: IPeopleDTO): void {
        const person = new People();

        Object.assign(person, {
            name,
            job,
            level,
            location,
        });

        this.people.push(person);
    }
}

export { PeopleRepository };
