<script lang="ts">
import { defineComponent } from 'vue';
import HexItem from './components/HexItem.vue';
import { pattern as pawnPattern } from '@/pawn';
import { pattern as rookPattern } from '@/rook';
import { pattern as knightPattern } from '@/knight';
import { pattern as bishopPattern } from '@/bishop';
import { pattern as queenPattern } from '@/queen';
import { pattern as kingPattern } from '@/king';
import { alphabet, type CellIDs, type Piece, type BoardPiece } from '@/data';

const black = '#212122'
const grey= '#676565'
const white = '#F3F3F3'

export default defineComponent({
    name: "App",
	components: { HexItem },
    data() {
        return {
			boardIDs: {
				'A6': {colour: black, grid: '1 / 6 / 2 / 7'},
				'B5': {colour: grey, grid: '2 / 5 / 3 / 6'},
				'B7': {colour: grey, grid: '2 / 7 / 3 / 8'},
				'C4': {colour: white, grid: '3 / 4 / 4 / 5'},
				'C6': {colour: white, grid: '3 / 6 / 4 / 7'},
				'C8': {colour: white, grid: '3 / 8 / 4 / 9'},
				'D3': {colour: black, grid: '4 / 3 / 5 / 4'},
				'D5': {colour: black, grid: '4 / 5 / 5 / 6'},
				'D7': {colour: black, grid: '4 / 7 / 5 / 8'},
				'D9': {colour: black, grid: '4 / 9 / 5 / 10'},
				'E2': {colour: grey, grid: '5 / 2 / 5 / 3'},
				'E4': {colour: grey, grid: '5 / 4 / 5 / 5'},
				'E6': {colour: grey, grid: '5 / 6 / 5 / 7'},
				'E8': {colour: grey, grid: '5 / 8 / 5 / 9'},
				'E10': {colour: grey, grid: '5 / 10 / 5 / 11'},
				'F1': {colour: white, grid: '6 / 1 / 7 / 2'},
				'F3': {colour: white, grid: '6 / 3 / 7 / 4'},
				'F5': {colour: white, grid: '6 / 5 / 7 / 6'},
				'F7': {colour: white, grid: '6 / 7 / 7 / 8'},
				'F9': {colour: white, grid: '6 / 9 / 7 / 10'},
				'F11': {colour: white, grid: '6 / 11 / 7 / 12'},
				'G2': {colour: black, grid: '7 / 2 / 8 / 3'},
				'G4': {colour: black, grid: '7 / 4 / 8 / 5'},
				'G6': {colour: black, grid: '7 / 6 / 8 / 7'},
				'G8': {colour: black, grid: '7 / 8 / 8 / 9'},
				'G10': {colour: black, grid: '7 / 10 / 8 / 11'},
				'H1': {colour: grey, grid: '8 / 1 / 9 / 2'},
				'H3': {colour: grey, grid: '8 / 3 / 9 / 4'},
				'H5': {colour: grey, grid: '8 / 5 / 9 / 6'},
				'H7': {colour: grey, grid: '8 / 7 / 9 / 8'},
				'H9': {colour: grey, grid: '8 / 9 / 9 / 10'},
				'H11': {colour: grey, grid: '8 / 11 / 9 / 12'},
				'I2': {colour: white, grid: '9 / 2 / 10 / 3'},
				'I4': {colour: white, grid: '9 / 4 / 10 / 5'},
				'I6': {colour: white, grid: '9 / 6 / 10 / 7'},
				'I8': {colour: white, grid: '9 / 8 / 10 / 9'},
				'I10': {colour: white, grid: '9 / 10 / 10 / 11'},
				'J1': {colour: black, grid: '10 / 1 / 11 / 2'},
				'J3': {colour: black, grid: '10 / 3 / 11 / 4'},
				'J5': {colour: black, grid: '10 / 5 / 11 / 6'},
				'J7': {colour: black, grid: '10 / 7 / 11 / 8'},
				'J9': {colour: black, grid: '10 / 9 / 11 / 10'},
				'J11': {colour: black, grid: '10 / 11 / 11 / 12'},
				'K2': {colour: grey, grid: '11 / 2 / 12 / 3'},
				'K4': {colour: grey, grid: '11 / 4 / 12 / 5'},
				'K6': {colour: grey, grid: '11 / 6 / 12 / 7'},
				'K8': {colour: grey, grid: '11 / 8 / 12 / 9'},
				'K10': {colour: grey, grid: '11 / 10 / 12 / 11'},
				'L1': {colour: white, grid: '12 / 1 / 13 / 2'},
				'L3': {colour: white, grid: '12 / 3 / 13 / 4'},
				'L5': {colour: white, grid: '12 / 5 / 13 / 6'},
				'L7': {colour: white, grid: '12 / 7 / 13 / 8'},
				'L9': {colour: white, grid: '12 / 9 / 13 / 10'},
				'L11': {colour: white, grid: '12 / 11 / 13 / 12'},
				'M2': {colour: black, grid: '13 / 2 / 14 / 3'},
				'M4': {colour: black, grid: '13 / 4 / 14 / 5'},
				'M6': {colour: black, grid: '13 / 6 / 14 / 7'},
				'M8': {colour: black, grid: '13 / 8 / 14 / 9'},
				'M10': {colour: black, grid: '13 / 10 / 14 / 11'},
				'N1': {colour: grey, grid: '14 / 1 / 15 / 2'},
				'N3': {colour: grey, grid: '14 / 3 / 15 / 4'},
				'N5': {colour: grey, grid: '14 / 5 / 15 / 6'},
				'N7': {colour: grey, grid: '14 / 7 / 15 / 8'},
				'N9': {colour: grey, grid: '14 / 9 / 15 / 10'},
				'N11': {colour: grey, grid: '14 / 11 / 15 / 12'},
				'O2': {colour: white, grid: '15 / 2 / 16 / 3'},
				'O4': {colour: white, grid: '15 / 4 / 16 / 5'},
				'O6': {colour: white, grid: '15 / 6 / 16 / 7'},
				'O8': {colour: white, grid: '15 / 8 / 16 / 9'},
				'O10': {colour: white, grid: '15 / 10 / 16 / 11'},
				'P1': {colour: black, grid: '16 / 1 / 17 / 2'},
				'P3': {colour: black, grid: '16 / 3 / 17 / 4'},
				'P5': {colour: black, grid: '16 / 5 / 17 / 6'},
				'P7': {colour: black, grid: '16 / 7 / 17 / 8'},
				'P9': {colour: black, grid: '16 / 9 / 17 / 10'},
				'P11': {colour: black, grid: '16 / 11 / 17 / 12'},
				'Q2': {colour: grey, grid: '17 / 2 / 18 / 3'},
				'Q4': {colour: grey, grid: '17 / 4 / 18 / 5'},
				'Q6': {colour: grey, grid: '17 / 6 / 18 / 7'},
				'Q8': {colour: grey, grid: '17 / 8 / 18 / 9'},
				'Q10': {colour: grey, grid: '17 / 10 / 18 / 11'},
				'R3': {colour: white, grid: '18 / 3 / 19 / 4'},
				'R5': {colour: white, grid: '18 / 5 / 19 / 6'},
				'R7': {colour: white, grid: '18 / 7 / 19 / 8'},
				'R9': {colour: white, grid: '18 / 9 / 19 / 10'},
				'S4': {colour: black, grid: '19 / 4 / 20 / 5'},
				'S6': {colour: black, grid: '19 / 6 / 20 / 7'},
				'S8': {colour: black, grid: '19 / 8 / 20 / 9'},
				'T5': {colour: grey, grid: '20 / 5 / 21 / 6'},
				'T7': {colour: grey, grid: '20 / 7 / 21 / 8'},
				'U6': {colour: white, grid: '21 / 6 / 22 / 7'},
			} as {[key in CellIDs]: {colour: '#212122' | '#676565' | '#F3F3F3', grid: string}},
			pieces: {
				'Q2': { colour: 'white', type: 'pawn', moved: false },
				'P3': { colour: 'white', type: 'pawn', moved: false },
				'O4': { colour: 'white', type: 'pawn', moved: false },
				'N5': { colour: 'white', type: 'pawn', moved: false },
				'M6': { colour: 'white', type: 'pawn', moved: false },
				'N7': { colour: 'white', type: 'pawn', moved: false },
				'O8': { colour: 'white', type: 'pawn', moved: false },
				'P9': { colour: 'white', type: 'pawn', moved: false },
				'Q10': { colour: 'white', type: 'pawn', moved: false },
				'R3': { colour: 'white', type: 'rook', moved: false },
				'R9': { colour: 'white', type: 'rook', moved: false },
				'S4': { colour: 'white', type: 'knight', moved: false },
				'S8': { colour: 'white', type: 'knight', moved: false },
				'T5': { colour: 'white', type: 'queen', moved: false },
				'T7': { colour: 'white', type: 'king', moved: false },
				'U6': { colour: 'white', type: 'bishop', moved: false },
				'S6': { colour: 'white', type: 'bishop', moved: false },
				'Q6': { colour: 'white', type: 'bishop', moved: false },
				'E2': { colour: 'black', type: 'pawn', moved: false },
				'F3': { colour: 'black', type: 'pawn', moved: false },
				'G4': { colour: 'black', type: 'pawn', moved: false },
				'H5': { colour: 'black', type: 'pawn', moved: false },
				'I6': { colour: 'black', type: 'pawn', moved: false },
				'H7': { colour: 'black', type: 'pawn', moved: false },
				'G8': { colour: 'black', type: 'pawn', moved: false },
				'F9': { colour: 'black', type: 'pawn', moved: false },
				'E10': { colour: 'black', type: 'pawn', moved: false },
				'D3': { colour: 'black', type: 'rook', moved: false },
				'D9': { colour: 'black', type: 'rook', moved: false },
				'C4': { colour: 'black', type: 'knight', moved: false },
				'C8': { colour: 'black', type: 'knight', moved: false },
				'B5': { colour: 'black', type: 'queen', moved: false },
				'B7': { colour: 'black', type: 'king', moved: false },
				'A6': { colour: 'black', type: 'bishop', moved: false },
				'C6': { colour: 'black', type: 'bishop', moved: false },
				'E6': { colour: 'black', type: 'bishop', moved: false },
			} as BoardPiece,
			pieceID: '' as CellIDs | null,
			type: '' as Piece | null,
			colour: '' as 'white' | 'black' | null,
			availableCells: [] as CellIDs[],
			turn: 'white' as 'white' | 'black'
		};
    },
    mounted() {
    },
    methods: {
		startMove(id: CellIDs, type: Piece, typeColour: 'white' | 'black'){
			if(this.turn !== typeColour || this.pieceID === id){
				this.pieceID = null;
				this.type = null;
				this.colour = null;
				this.availableCells = []
				return;
			}
			this.pieceID = id;
			this.type = type;
			this.colour = typeColour;
			this.availableCells = []

			if(this.type === 'pawn'){
				this.availableCells = pawnPattern(this.colour, this.pieceID, this.pieces)
			}
			else if(this.type === 'rook'){
				this.availableCells = rookPattern(this.colour, this.pieceID, this.pieces)
			}
			else if(this.type === 'knight'){
				this.availableCells = knightPattern(this.colour, this.pieceID, this.pieces)
			}
			else if(this.type === 'bishop'){
				this.availableCells = bishopPattern(this.colour, this.pieceID, this.pieces)
			}
			else if(this.type === 'queen'){
				this.availableCells = queenPattern(this.colour, this.pieceID, this.pieces)
			}
			else if(this.type === 'king'){
				this.availableCells = kingPattern(this.colour, this.pieceID, this.pieces)
			}
		},
		selected(id: CellIDs){
			if(!this.pieceID || !this.colour|| !this.type || !this.availableCells.includes(id)){
				return;
			}

			delete this.pieces[this.pieceID];

			let moved = true;
			if(this.colour === 'white' && this.type === 'pawn'){
				moved = !['Q2','P3','O4','N5','M6','N7','O8','P9','Q10'].includes(id)
			}else if(this.type === 'pawn') {
				moved = !['E2','F3','G4','H5','I6','H7','G8','F9','E10'].includes(id)
			}

			this.pieces[id] = {'colour': this.colour, 'moved': moved, 'type': this.type};

			this.pieceID = null;
			this.type = null;
			this.colour = null;
			this.availableCells = []
			this.turn = this.turn === 'white' ? 'black' : 'white'
		},
	}
})

</script>

<template>
	<main>
		<section class="board">
			<template v-for="info, id of boardIDs">
				<HexItem 
					:colour="info.colour" 
					:id="id"
					:highlight="availableCells.includes(id)"
					:style="{ 'grid-area': info.grid }"
					:type="pieces[id]?.type"
					:pColour="pieces[id]?.colour"
					@clicked="selected(id), startMove(id, pieces[id]?.type, pieces[id]?.colour)"
				/>
			</template>
		</section>
	</main>
</template>

<style>
@import url('../public/root.css');

.board {
	display: grid;
	grid-template-columns: repeat(11, 45px);
	grid-template-rows: repeat(21, 45px);
	place-items: center;
	gap: 0 calc(90px - 55px);
	filter: drop-shadow(0 0 5px #0008);
}
</style>
