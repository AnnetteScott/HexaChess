import { alphabet, checkCell, type BoardPiece, type CellIDs, type Piece } from "./data";

export function pattern (team: 'black' | 'white', currentTile: CellIDs, boardPieces: BoardPiece): Array<CellIDs> {
	const output: Array<CellIDs> = [];

	const regExSplit = /([a-z])([0-9]{1,2})/i.exec(currentTile);
	if (!regExSplit) {
		return output;
	}
	const alpha = alphabet.indexOf(regExSplit[1]);
	const index = parseInt(regExSplit[2]);


	const directions = { 'black': 1, 'white': -1 };

	//Forward Cells
	let cell = `${alphabet[alpha + 2 * directions[team]]}${index}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
		cell = `${alphabet[alpha + 4 * directions[team]]}${index}` as CellIDs;
		if (!checkCell(cell, team, boardPieces) && !boardPieces[currentTile].moved) {
			output.push(cell);
		}
	}
	
	//Neighbour cell
	cell = `${alphabet[alpha + 1 * directions[team]]}${index - 1}` as CellIDs;
	const passantCell1 = `${alphabet[alpha - 1 * directions[team]]}${index - 1}` as CellIDs;
	if (typeof checkCell(cell, team, boardPieces) === 'string' || checkCell(passantCell1, team, boardPieces) === 'pawn') {
		output.push(cell);
	}

	//Neighbour cell
	cell = `${alphabet[alpha + 1 * directions[team]]}${index + 1}` as CellIDs;
	if (typeof checkCell(cell, team, boardPieces) === 'string') {
		output.push(cell);
	}

	return output;
}