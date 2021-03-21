import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { ICandidatureDTO } from "../../../helper/ICandidatureDTO";
import { CreateCandidatureUseCase } from "../useCase/CreateCandidatureUseCase";

class CreateCandidatureController {
    constructor(private createCandidatureUseCase: CreateCandidatureUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id_person, id_vacancy }: ICandidatureDTO = request.body;

        this.createCandidatureUseCase.execute({ id_vacancy, id_person });

        return response.status(StatusCodes.CREATED).json({
            response: ReasonPhrases.CREATED,
        });
    }
}

export { CreateCandidatureController };
