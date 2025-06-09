import { BallPen, GelPen, PenBody, Pencil, PenInk, PenNib } from "./models";

const gelPen = new GelPen(new PenBody(), new PenInk(), new PenNib())
gelPen.refill()
gelPen.write()

const ballPen = new BallPen(new PenBody(), new PenInk(), new PenNib())
ballPen.refill()
ballPen.write()

/**
 * Need To Improve:
 * Why pencil has refill?
 */
const pencil = new Pencil(new PenBody(), new PenInk(), new PenNib())
pencil.write()
