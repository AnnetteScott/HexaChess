export const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'];

const ids = ['A6', 'B5', 'B7', 'C4', 'C6', 'C8', 'D3', 'D5', 'D7', 'D9', 'E2', 'E4', 'E6', 'E8', 'E10', 'F1', 'F3', 'F5', 'F7', 'F9', 'F11', 'G2', 'G4', 'G6', 'G8', 'G10', 'H1', 'H3', 'H5', 'H7', 'H9', 'H11', 'I2', 'I4', 'I6', 'I8', 'I10', 'J1', 'J3', 'J5', 'J7', 'J9', 'J11', 'K2', 'K4', 'K6', 'K8', 'K10', 'L1', 'L3', 'L5', 'L7', 'L9', 'L11', 'M2', 'M4', 'M6', 'M8', 'M10', 'N1', 'N3', 'N5', 'N7', 'N9', 'N11', 'O2', 'O4', 'O6', 'O8', 'O10', 'P1', 'P3', 'P5', 'P7', 'P9', 'P11', 'Q2', 'Q4', 'Q6', 'Q8', 'Q10', 'R3', 'R5', 'R7', 'R9', 'S4', 'S6', 'S8', 'T5', 'T7', 'U6'] as const;

export type CellIDs = (typeof ids)[number];

const isID = (x: any): x is CellIDs => ids.includes(x);

export type Piece = 'bishop' | 'queen' | 'king' | 'knight' | 'rook' | 'pawn';

export type BoardPiece = {[key in CellIDs]: {colour: 'white' | 'black', type: Piece, moved: boolean}}

export function checkCell(cellID: CellIDs, colour: 'white' | 'black', boardPieces: BoardPiece): Piece | boolean{
	if(!isID(cellID)){
		// Cell is not valid
		return true;
	}

	if(Object.keys(boardPieces).includes(cellID)){
		if(boardPieces[cellID].colour === colour){
			// Same colour piece in cell
			return true;
		}
		// Enemy piece in cell
		return boardPieces[cellID].type
	}
	// No piece in cell
	return false;
}
