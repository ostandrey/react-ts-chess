import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/Chess_kdt60.png";
import whiteLogo from "../../assets/Chess_klt60.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        return true
    }
}