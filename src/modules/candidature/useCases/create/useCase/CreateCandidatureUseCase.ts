import { Dijkstra } from "dijkstra-pathfinder";

import { IPeopleRepository } from "../../../../people/repositories/utils/IPeopleRepository";
import { IVacancyRepository } from "../../../../vacancy/repositories/utils/IVacancyRepository";
import { ICandidatureDTO } from "../../../helper/ICandidatureDTO";
import { graph } from "../../../helper/Locations";
import { ICandidatureRepository } from "../../../repositories/utils/ICandidatureRepository";

class CreateCandidatureUseCase {
    constructor(
        private candidatureRepository: ICandidatureRepository,
        private vacancyRepository: IVacancyRepository,
        private peopleRepository: IPeopleRepository
    ) {}

    execute({ id_vacancy, id_person }: ICandidatureDTO): void {
        const vacancy = this.vacancyRepository.findById(id_vacancy);
        const person = this.peopleRepository.findById(id_person);

        const scoreLocation: number = CreateCandidatureUseCase.routesOfLocation(
            vacancy.location,
            person.location
        );

        const scoreDistance: number = CreateCandidatureUseCase.distanceScore(
            scoreLocation
        );

        const scoreLevel: number = 100 - 25 * (vacancy.level - person.level);

        const score: number = (scoreLevel + scoreDistance) / 2;

        this.candidatureRepository.create({ person, vacancy, score });
    }

    /**
     *
     * @param target
     * @param source
     * @private
     *
     * @description Foi utilizado a ideia do Algoritmo de DIJKSTRA
     *
     * @link https://pt.wikipedia.org/wiki/Algoritmo_de_Dijkstra
     */
    private static routesOfLocation(target: string, source: string): number {
        const graphStart = graph.findNodeByPayload(source);

        const graphTarget = graph.findNodeByPayload(target);

        const dijkstra = new Dijkstra(graph, graphStart);

        dijkstra.calculate();

        const pathToTarget = dijkstra.getPathTo(graphTarget);

        console.log(pathToTarget);

        return pathToTarget[pathToTarget.length - 1].bestPath.distance;
    }

    /**
     *
     * @param distance
     * @private
     */
    private static distanceScore(distance: number): number {
        if (distance <= 5) return 100;
        if (distance > 5 || distance <= 10) return 75;
        if (distance > 10 || distance <= 15) return 50;
        if (distance > 15 || distance <= 20) return 25;
        return 0;
    }
}

export { CreateCandidatureUseCase };
