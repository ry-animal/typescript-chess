"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const pieces_1 = require("./pieces");
const game = (0, game_1.createGame)();
const pieceSymbols = {
    [pieces_1.PieceType.King]: 'K', [pieces_1.PieceType.Queen]: 'Q', [pieces_1.PieceType.Rook]: 'R',
    [pieces_1.PieceType.Bishop]: 'B', [pieces_1.PieceType.Knight]: 'N', [pieces_1.PieceType.Pawn]: 'P'
};
const colorSymbols = {
    [pieces_1.Color.White]: 'W', [pieces_1.Color.Black]: 'B'
};
const printBoard = (game) => {
    for (let row = 0; row < 8; row++) {
        let rowStr = '';
        for (let col = 0; col < 8; col++) {
            const piece = game.board[row][col];
            rowStr += piece ? `${pieceSymbols[piece.type]}${colorSymbols[piece.color]} ` : '-- ';
        }
        console.log(rowStr);
    }
};
printBoard(game);
const gameAfterMove = (0, game_1.makeMove)(game, [1, 0], [3, 0]); // Example move
printBoard(gameAfterMove);
