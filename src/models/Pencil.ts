import { Pen } from "./Pen";
import { PenBody } from "./PenBody";
import { PenInk } from "./PenInk";
import { PenNib } from "./PenNib";

export class Pencil extends Pen {
    constructor(body: PenBody, ink: PenInk, nib: PenNib) {
        super(body, ink, nib)
    }

    public write(): void {
        console.log("Writing like a pencil.")
    }
}
