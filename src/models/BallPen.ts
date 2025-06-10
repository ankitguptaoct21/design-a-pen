import { IRefillable } from "../interfaces/IRefillable";
import { Pen } from "./Pen";
import { PenBody } from "./PenBody";
import { PenInk } from "./PenInk";
import { PenNib } from "./PenNib";

export class BallPen extends Pen implements IRefillable {
    constructor(body: PenBody, ink: PenInk, nib: PenNib) {
        super(body, ink, nib)
    }

    public write(): void {
        console.log("Writing like a ball pen.")
    }

    public refill(): void {
        console.log("Refilling like a ball pen.")
    }
}
