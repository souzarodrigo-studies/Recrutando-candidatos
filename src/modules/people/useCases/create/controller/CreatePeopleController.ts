import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { IPeopleDTO } from "../../../repositories/utils/IPeopleDTO";
import { CreatePeopleUseCase } from "../useCase/CreatePeopleUseCase";

class CreatePeopleController {
    constructor(private createPeopleUseCase: CreatePeopleUseCase) {}

    handle(request: Request, response: Response): Response {
        const { job, location, level, name }: IPeopleDTO = request.body;

        this.createPeopleUseCase.execute({ job, location, level, name });

        return response.status(StatusCodes.CREATED).json({
            response: ReasonPhrases.CREATED,
        });
    }
}

export { CreatePeopleController };
