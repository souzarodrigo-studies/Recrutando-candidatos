import { ListPeopleUseCase } from "../useCase/ListPeopleUseCase";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class ListPeopleController {
    constructor(private listPeopleUseCase: ListPeopleUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listPeopleUseCase.execute();

        return response.status(StatusCodes.OK).send({ people: all });
    }
}

export { ListPeopleController };
