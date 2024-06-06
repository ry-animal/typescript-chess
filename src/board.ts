
import { Piece, PieceType, Color, createPiece } from './pieces';

export type Board = (Piece | null)[][];

export const createInitialBoard = (): Board => {
    const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let i = 0; i < 8; i++) {
        board[1][i] = createPiece(PieceType.Pawn, Color.White);
        board[6][i] = createPiece(PieceType.Pawn, Color.Black);
    }

    const backRank: PieceType[] = [
        PieceType.Rook, PieceType.Knight, PieceType.Bishop, PieceType.Queen,
        PieceType.King, PieceType.Bishop, PieceType.Knight, PieceType.Rook
    ];

    for (let i = 0; i < 8; i++) {
        board[0][i] = createPiece(backRank[i], Color.White);
        board[7][i] = createPiece(backRank[i], Color.Black);
    }

    return board;
};

export const movePiece = (board: Board, from: [number, number], to: [number, number]): Board => {
    const newBoard = board.map(row => row.slice());
    const piece = newBoard[from[0]][from[1]];
    newBoard[to[0]][to[1]] = piece;
    newBoard[from[0]][from[1]] = null;
    return newBoard;
};
