"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movePiece = exports.createInitialBoard = void 0;
const pieces_1 = require("./pieces");
const createInitialBoard = () => {
    const board = Array.from({ length: 8 }, () => Array(8).fill(null));
    for (let i = 0; i < 8; i++) {
        board[1][i] = (0, pieces_1.createPiece)(pieces_1.PieceType.Pawn, pieces_1.Color.White);
        board[6][i] = (0, pieces_1.createPiece)(pieces_1.PieceType.Pawn, pieces_1.Color.Black);
    }
    const backRank = [
        pieces_1.PieceType.Rook, pieces_1.PieceType.Knight, pieces_1.PieceType.Bishop, pieces_1.PieceType.Queen,
        pieces_1.PieceType.King, pieces_1.PieceType.Bishop, pieces_1.PieceType.Knight, pieces_1.PieceType.Rook
    ];
    for (let i = 0; i < 8; i++) {
        board[0][i] = (0, pieces_1.createPiece)(backRank[i], pieces_1.Color.White);
        board[7][i] = (0, pieces_1.createPiece)(backRank[i], pieces_1.Color.Black);
    }
    return board;
};
exports.createInitialBoard = createInitialBoard;
const movePiece = (board, from, to) => {
    const newBoard = board.map(row => row.slice());
    const piece = newBoard[from[0]][from[1]];
    newBoard[to[0]][to[1]] = piece;
    newBoard[from[0]][from[1]] = null;
    return newBoard;
};
exports.movePiece = movePiece;
