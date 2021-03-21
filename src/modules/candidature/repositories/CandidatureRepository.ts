import { Candidature } from "../models/Candidature";
import { ICandidature } from "./utils/ICandidature";
import { ICandidatureRepository } from "./utils/ICandidatureRepository";

class CandidatureRepository implements ICandidatureRepository {
    protected candidatures: Candidature[];

    private static INSTANCE: CandidatureRepository;

    private constructor() {
        this.candidatures = [];
    }

    public static getInstance(): CandidatureRepository {
        if (!CandidatureRepository.INSTANCE)
            CandidatureRepository.INSTANCE = new CandidatureRepository();

        return CandidatureRepository.INSTANCE;
    }

    create({ person, vacancy, score }: ICandidature): void {
        const candidature = new Candidature();

        Object.assign(candidature, {
            id_vacancy: vacancy.id,
            id_person: person.id,
            name: person.name,
            location: person.location,
            level: person.level,
            score,
        });

        this.candidatures.push(candidature);
    }

    list(): Candidature[] {
        return this.candidatures;
    }

    ranking(id_vacancy: string): Candidature[] {
        return this.candidatures.filter(
            (candidature) => candidature.id_vacancy === id_vacancy
        );
    }
}

export { CandidatureRepository };
