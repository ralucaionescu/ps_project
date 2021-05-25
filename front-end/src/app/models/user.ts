import { Pet } from "./pet";
import { Rating } from "./rating";


export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: string;
    pets: Pet[];
    ratings: Rating[];
    constructor() { }
}
