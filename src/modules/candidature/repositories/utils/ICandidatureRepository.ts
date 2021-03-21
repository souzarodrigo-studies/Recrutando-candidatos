import { ICandidature } from "./ICandidature";
import { Candidature } from "../../models/Candidature";

interface ICandidatureRepository {
    list(): Candidature[];
    create({ person, vacancy, score }: ICandidature): void;
    ranking(id_vacancy: string): Candidature[];
}

export { ICandidatureRepository };
