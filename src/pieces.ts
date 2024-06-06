
export enum PieceType {
    King, Queen, Rook, Bishop, Knight, Pawn
}

export enum Color {
    White, Black
}

export type Piece = {
    type: PieceType;
    color: Color;
};

export const createPiece = (type: PieceType, color: Color): Piece => ({ type, color });
