import { Center } from "./adoptionCenters";
import { User } from "./user";

export class Rating {
    public rate: number;
    public user: User;
    public center: Center;
    constructor(
        rating: number, user: User, center: Center
    ) {
        this.rate = rating;
        this.center = center;
        this.user = user;
    }
}
