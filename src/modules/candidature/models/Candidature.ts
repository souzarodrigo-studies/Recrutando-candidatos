import { v4 as uuidV4 } from "uuid";

class Candidature {
    id: string;
    id_vacancy: string;
    id_person: string;
    name: string;
    location: string;
    level: number;
    score: number;
    createdAt: Date;

    constructor() {
        if (!this.id) this.id = uuidV4();

        if (!this.createdAt) this.createdAt = new Date();
    }
}

export { Candidature };
