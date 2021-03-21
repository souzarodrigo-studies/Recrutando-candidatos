import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { CreateVacancyUseCase } from "../useCase/CreateVacancyUseCase";

class CreateVacancyController {
    constructor(private createVacancyUseCase: CreateVacancyUseCase) {}

    handle(request: Request, response: Response): Response {
        const { title, location, level, description, company } = request.body;

        this.createVacancyUseCase.execute({
            title,
            location,
            level,
            description,
            company,
        });

        return response.status(StatusCodes.CREATED).json({
            response: ReasonPhrases.CREATED,
        });
    }
}

export { CreateVacancyController };
