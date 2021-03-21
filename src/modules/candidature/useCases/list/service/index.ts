import { CandidatureRepository } from "../../../repositories/CandidatureRepository";
import { ListCandidatureUseCase } from "../useCase/ListCandidatureUseCase";
import { ListCandidatureController } from "../controller/ListCandidatureController";

const candidatureRepository = CandidatureRepository.getInstance();
const candidatureUseCase = new ListCandidatureUseCase(candidatureRepository);
const listCandidatureController = new ListCandidatureController(
    candidatureUseCase
);

export { listCandidatureController };
