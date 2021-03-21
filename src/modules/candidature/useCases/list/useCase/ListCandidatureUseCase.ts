import { ICandidatureRepository } from "../../../repositories/utils/ICandidatureRepository";
import { Candidature } from "../../../models/Candidature";

class ListCandidatureUseCase {
    constructor(private candidatureRepository: ICandidatureRepository) {}

    execute(): Candidature[] {
        return this.candidatureRepository.list();
    }
}

export { ListCandidatureUseCase };
