import { Center } from "./adoptionCenters";

export interface Pet {
    id: number;
    type: string;
    name: string;
    age: number;
    vaccinated: boolean;
    breed: string;
    adopted: boolean;
    image: string;
    inShelter: boolean;
    center: Center;

}