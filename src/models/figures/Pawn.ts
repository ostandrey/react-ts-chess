import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/Chess_pdt60.png";
import whiteLogo from "../../assets/Chess_plt60.png";

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true
    }
}