import { Review } from "./review.model";

export class Item {
    name: string;
    price: string;
    info: string;
    isReviewShowed: boolean;
    reviews: Review[];
}
