import { People } from "../../../people/models/people";
import { Vacancy } from "../../../vacancy/models/Vacancy";

interface ICandidature {
    vacancy: Vacancy;
    person: People;
    score: number;
}

export { ICandidature };
