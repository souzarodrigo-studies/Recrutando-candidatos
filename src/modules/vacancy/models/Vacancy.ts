import { v4 as uuidV4 } from "uuid";

class Vacancy {
    id?: string;
    company: string;
    title: string;
    description: string;
    location: string;
    level: number;
    createdAt?: Date;

    constructor() {
        if (!this.id) this.id = uuidV4();

        if (!this.createdAt) this.createdAt = new Date();
    }
}

export { Vacancy };
