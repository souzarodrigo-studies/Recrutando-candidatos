/**
 *
 * name - string
 * duration - number
 * educator - string
 */

interface ICourse {
    name: string;
    educator: string;
    duration?: number;
}

class CreateCourseService {
    execute({ name, duration = 8, educator }: ICourse) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();
