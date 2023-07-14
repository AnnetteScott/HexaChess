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
		[-3, -1], [-3, +1],
		[0, -2], [0, +2],
		[+3, -1], [+3, +1],
		[-2, 0], [2, 0], 
		[1, 1], [1, -1],
		[-1, 1], [-1, -1]
	]

	for (const [offsetAlpha, offsetIndex] of offsets) {
		const cell = `${alphabet[alpha + offsetAlpha]}${index + offsetIndex}` as CellIDs;
		if (!checkCell(cell, team, boardPieces)) {
			output.push(cell);
		}
		else if (typeof checkCell(cell, team, boardPieces) === 'string') {
			output.push(cell);
		}
	}
	
	return output;
}