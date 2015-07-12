﻿module JirglStructures {
    export class Position {
        x: number;
        y: number;
    }

    export class ArrowPosition {
        start: Position;
        end: Position;
    }

    export interface IGrid
    {
        getArrowType(): ArrowType;
        getItemPosition(maxWidth: number): Position;
        getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[];
    }
}