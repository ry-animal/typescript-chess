import { Board, createInitialBoard, movePiece } from './board';
import { Color } from './pieces';

export type Game = {
    board: Board;
    turn: Color;
};

export const createGame = (): Game => ({
    board: createInitialBoard(),
    turn: Color.White
});

export const makeMove = (game: Game, from: [number, number], to: [number, number]): Game => {
    const newBoard = movePiece(game.board, from, to);
    const nextTurn = game.turn === Color.White ? Color.Black : Color.White;
    return { board: newBoard, turn: nextTurn };
};
