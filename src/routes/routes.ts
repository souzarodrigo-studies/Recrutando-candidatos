import { Request, Response } from "express";
import CreateCourseService from "../service/CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Rodrigo",
    });

    return response.send();
}
