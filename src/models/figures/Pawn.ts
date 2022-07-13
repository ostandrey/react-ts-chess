import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/Chess_pdt60.png";
import whiteLogo from "../../assets/Chess_plt60.png";

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        //for black pawns to go in down. Rewrite logic to replace the board (replace black and white figures)
        const direction = this.cell.figure?.color === Colors.BLACK ? 1: -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2: -2;
        console.log(target.y, target.x)

        if((target.y === this.cell.y + direction || this.isFirstStep
            && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        if(target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)){
            return true;
        }

        return false
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }
}