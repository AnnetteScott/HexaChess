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
	]

	for (const [offsetAlpha, offsetIndex] of offsets) {
		let i = alpha + offsetAlpha;
		let j = index + offsetIndex;
		
		while (i >= 0 && i < 21 && j >= 0) {
			const cell = `${alphabet[i]}${j}` as CellIDs;
			if (!checkCell(cell, team, boardPieces)) {
				output.push(cell);
			} else if (typeof checkCell(cell, team, boardPieces) === 'string') {
				output.push(cell);
				break;
			} else {
				break;
			}
			i += offsetAlpha;
			j += offsetIndex;
		}
	}
	
	return output;
}