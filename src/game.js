"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMove = exports.createGame = void 0;
const board_1 = require("./board");
const pieces_1 = require("./pieces");
const createGame = () => ({
    board: (0, board_1.createInitialBoard)(),
    turn: pieces_1.Color.White
});
exports.createGame = createGame;
const makeMove = (game, from, to) => {
    const newBoard = (0, board_1.movePiece)(game.board, from, to);
    const nextTurn = game.turn === pieces_1.Color.White ? pieces_1.Color.Black : pieces_1.Color.White;
    return { board: newBoard, turn: nextTurn };
};
exports.makeMove = makeMove;
