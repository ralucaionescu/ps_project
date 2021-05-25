import { Pet } from "./pet";
import { Rating } from "./rating";

export interface Center {
    name: string;
    city: string;
    description: string;
    pets: Pet[];
    ratings: Rating[];
}
