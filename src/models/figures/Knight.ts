import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/Chess_ndt60.png";
import whiteLogo from "../../assets/Chess_nlt60.png";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true
    }
}