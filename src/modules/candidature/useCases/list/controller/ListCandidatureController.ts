import { ListCandidatureUseCase } from "../useCase/ListCandidatureUseCase";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class ListCandidatureController {
    constructor(private listCandidatureUseCase: ListCandidatureUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCandidatureUseCase.execute();

        return response.status(StatusCodes.OK).send({ candidature: all });
    }
}

export { ListCandidatureController };
