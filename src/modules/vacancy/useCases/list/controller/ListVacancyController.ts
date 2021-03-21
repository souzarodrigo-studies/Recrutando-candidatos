import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ListVacancyUseCase } from "../useCase/ListVacancyUseCase";

class ListVacancyController {
    constructor(private listVacancyUseCase: ListVacancyUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listVacancyUseCase.execute();

        return response.status(StatusCodes.OK).send({ vacancy: all });
    }
}

export { ListVacancyController };
