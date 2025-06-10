import { PenBody } from "./PenBody"
import { PenNib } from "./PenNib"
import { PenInk } from "./PenInk"

export abstract class Pen {
    private body: PenBody
    private ink: PenInk
    private nib: PenNib

    constructor(body: PenBody, ink: PenInk, nib: PenNib) {
        this.body = body
        this.ink = ink
        this.nib = nib
    }

    public abstract write(): void
    // public abstract refill(): void       // Implements using interface
}
