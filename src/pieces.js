"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPiece = exports.Color = exports.PieceType = void 0;
var PieceType;
(function (PieceType) {
    PieceType[PieceType["King"] = 0] = "King";
    PieceType[PieceType["Queen"] = 1] = "Queen";
    PieceType[PieceType["Rook"] = 2] = "Rook";
    PieceType[PieceType["Bishop"] = 3] = "Bishop";
    PieceType[PieceType["Knight"] = 4] = "Knight";
    PieceType[PieceType["Pawn"] = 5] = "Pawn";
})(PieceType || (exports.PieceType = PieceType = {}));
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
})(Color || (exports.Color = Color = {}));
const createPiece = (type, color) => ({ type, color });
exports.createPiece = createPiece;
