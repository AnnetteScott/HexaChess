import { alphabet, checkCell, type BoardPiece, type CellIDs } from "./data";

export function pattern (team: 'black' | 'white', currentTile: CellIDs, boardPieces: BoardPiece): Array<CellIDs> {
	const output: Array<CellIDs> = [];

	const regExSplit = /([a-z])([0-9]{1,2})/i.exec(currentTile);
	if (!regExSplit) {
		return output;
	}
	const alpha = alphabet.indexOf(regExSplit[1]);
	const index = parseInt(regExSplit[2]);



	let cell = `${alphabet[alpha - 5]}${index + 1}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha - 5]}${index - 1}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha - 4]}${index + 2}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha - 4]}${index - 2}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha - 1]}${index + 3}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha - 1]}${index - 3}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 1]}${index + 3}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 1]}${index - 3}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 4]}${index + 2}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 4]}${index - 2}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 5]}${index + 1}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	cell = `${alphabet[alpha + 5]}${index - 1}` as CellIDs;
	if (!checkCell(cell, team, boardPieces)) {
		output.push(cell);
	}
	return output;
}