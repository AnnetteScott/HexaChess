import { alphabet, checkCell, type BoardPiece, type CellIDs } from "./data";

export function pattern (team: 'black' | 'white', currentTile: CellIDs, boardPieces: BoardPiece): Array<CellIDs> {
	const output: Array<CellIDs> = [];

	const regExSplit = /([a-z])([0-9]{1,2})/i.exec(currentTile);
	if (!regExSplit) {
		return output;
	}
	const alpha = alphabet.indexOf(regExSplit[1]);
	const index = parseInt(regExSplit[2]);

	const offsets = [
		[-5, 1], [-5, -1],
		[-4, 2], [-4, -2],
		[-1, 3], [-1, -3],
		[1, 3], [1, -3],
		[4, 2], [4, -2],
		[5, 1], [5, -1]
	];
	
	for (const [offsetAlpha, offsetIndex] of offsets) {
		const cell = `${alphabet[alpha + offsetAlpha]}${index + offsetIndex}` as CellIDs;
		if (!checkCell(cell, team, boardPieces)) {
			output.push(cell);
		}
	}
	return output;
}