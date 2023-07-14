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

	// Decreasing alpha
	for(let i = alpha - 1; i >= 0; i--){
		let cell = `${alphabet[i]}${index}` as CellIDs;
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
	}
	// Increasing alpha
	for(let i = alpha + 1; i < 21; i++){
		let cell = `${alphabet[i]}${index}` as CellIDs;
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
	}
	// Increasing alpha and Increasing index
	let j = index + 1
	for(let i = alpha + 1; i < 21; i++){
		console.log(i, j)
		let cell = `${alphabet[i]}${j}` as CellIDs;
		console.log(cell)
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
		j++;
	}
	// Increasing alpha and Decreasing index
	j = index - 1
	for(let i = alpha + 1; i < 21; i++){
		let cell = `${alphabet[i]}${j}` as CellIDs;
		console.log(cell)
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
		j--;
		if(j < 0){
			break;
		}
	}
	// Decreasing alpha and Increasing index
	j = index + 1
	for(let i = alpha - 1; i >= 0; i--){
		let cell = `${alphabet[i]}${j}` as CellIDs;
		console.log(cell)
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
		j++;
	}
	// Decreasing alpha and Decreasing index
	j = index - 1
	for(let i = alpha - 1; i >= 0; i--){
		let cell = `${alphabet[i]}${j}` as CellIDs;
		console.log(cell)
		if(!checkCell(cell, team, boardPieces)){
			output.push(cell)
		}
		else if(typeof checkCell(cell, team, boardPieces) === 'string'){
			output.push(cell);
			break;
		}
		else{ break; }
		j--;
		if(j < 0){
			break;
		}
	}

	return output;
}