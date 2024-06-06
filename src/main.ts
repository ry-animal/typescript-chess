import { createGame, makeMove } from './game';
import { PieceType, Color } from './pieces';

const game = createGame();

const pieceSymbols: Record<PieceType, string> = {
    [PieceType.King]: 'K', [PieceType.Queen]: 'Q', [PieceType.Rook]: 'R',
    [PieceType.Bishop]: 'B', [PieceType.Knight]: 'N', [PieceType.Pawn]: 'P'
};
const colorSymbols: Record<Color, string> = {
    [Color.White]: 'W', [Color.Black]: 'B'
};

const printBoard = (game: ReturnType<typeof createGame>) => {
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

// Example move
// const gameAfterMove = makeMove(game, [1, 0], [3, 0]); 
// printBoard(gameAfterMove);
