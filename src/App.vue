<script lang="ts">
import { defineComponent } from 'vue';
import HexItem from './components/HexItem.vue';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export default defineComponent({
    name: "App",
	components: { HexItem },
    data() {
        return {
			boardIDs: {
				'A1': {colour: 'black', grid: '1 / 6 / 2 / 7'},
				'B1': {colour: 'grey', grid: '2 / 5 / 3 / 6'},
				'B2': {colour: 'grey', grid: '2 / 7 / 3 / 8'},
				'C1': {colour: 'white', grid: '3 / 4 / 4 / 5'},
				'C2': {colour: 'white', grid: '3 / 6 / 4 / 7'},
				'C3': {colour: 'white', grid: '3 / 8 / 4 / 9'},
				'D1': {colour: 'black', grid: '4 / 3 / 5 / 4'},
				'D2': {colour: 'black', grid: '4 / 5 / 5 / 6'},
				'D3': {colour: 'black', grid: '4 / 7 / 5 / 8'},
				'D4': {colour: 'black', grid: '4 / 9 / 5 / 10'},
				'E1': {colour: 'grey', grid: '5 / 2 / 5 / 3'},
				'E2': {colour: 'grey', grid: '5 / 4 / 5 / 5'},
				'E3': {colour: 'grey', grid: '5 / 6 / 5 / 7'},
				'E4': {colour: 'grey', grid: '5 / 8 / 5 / 9'},
				'E5': {colour: 'grey', grid: '5 / 10 / 5 / 11'},
				'F1': {colour: 'white', grid: '6 / 1 / 7 / 2'},
				'F2': {colour: 'white', grid: '6 / 3 / 7 / 4'},
				'F3': {colour: 'white', grid: '6 / 5 / 7 / 6'},
				'F4': {colour: 'white', grid: '6 / 7 / 7 / 8'},
				'F5': {colour: 'white', grid: '6 / 9 / 7 / 10'},
				'F6': {colour: 'white', grid: '6 / 11 / 7 / 12'},
				'G1': {colour: 'black', grid: '7 / 2 / 8 / 3'},
				'G2': {colour: 'black', grid: '7 / 4 / 8 / 5'},
				'G3': {colour: 'black', grid: '7 / 6 / 8 / 7'},
				'G4': {colour: 'black', grid: '7 / 8 / 8 / 9'},
				'G5': {colour: 'black', grid: '7 / 10 / 8 / 11'},
				'H1': {colour: 'grey', grid: '8 / 1 / 9 / 2'},
				'H2': {colour: 'grey', grid: '8 / 3 / 9 / 4'},
				'H3': {colour: 'grey', grid: '8 / 5 / 9 / 6'},
				'H4': {colour: 'grey', grid: '8 / 7 / 9 / 8'},
				'H5': {colour: 'grey', grid: '8 / 9 / 9 / 10'},
				'H6': {colour: 'grey', grid: '8 / 11 / 9 / 12'},
				'I1': {colour: 'white', grid: '9 / 2 / 10 / 3'},
				'I2': {colour: 'white', grid: '9 / 4 / 10 / 5'},
				'I3': {colour: 'white', grid: '9 / 6 / 10 / 7'},
				'I4': {colour: 'white', grid: '9 / 8 / 10 / 9'},
				'I5': {colour: 'white', grid: '9 / 10 / 10 / 11'},
				'J1': {colour: 'black', grid: '10 / 1 / 11 / 2'},
				'J2': {colour: 'black', grid: '10 / 3 / 11 / 4'},
				'J3': {colour: 'black', grid: '10 / 5 / 11 / 6'},
				'J4': {colour: 'black', grid: '10 / 7 / 11 / 8'},
				'J5': {colour: 'black', grid: '10 / 9 / 11 / 10'},
				'J6': {colour: 'black', grid: '10 / 11 / 11 / 12'},
				'K1': {colour: 'grey', grid: '11 / 2 / 12 / 3'},
				'K2': {colour: 'grey', grid: '11 / 4 / 12 / 5'},
				'K3': {colour: 'grey', grid: '11 / 6 / 12 / 7'},
				'K4': {colour: 'grey', grid: '11 / 8 / 12 / 9'},
				'K5': {colour: 'grey', grid: '11 / 10 / 12 / 11'},
				'L1': {colour: 'white', grid: '12 / 1 / 13 / 2'},
				'L2': {colour: 'white', grid: '12 / 3 / 13 / 4'},
				'L3': {colour: 'white', grid: '12 / 5 / 13 / 6'},
				'L4': {colour: 'white', grid: '12 / 7 / 13 / 8'},
				'L5': {colour: 'white', grid: '12 / 9 / 13 / 10'},
				'L6': {colour: 'white', grid: '12 / 11 / 13 / 12'},
				'M1': {colour: 'black', grid: '13 / 2 / 14 / 3'},
				'M2': {colour: 'black', grid: '13 / 4 / 14 / 5'},
				'M3': {colour: 'black', grid: '13 / 6 / 14 / 7'},
				'M4': {colour: 'black', grid: '13 / 8 / 14 / 9'},
				'M5': {colour: 'black', grid: '13 / 10 / 14 / 11'},
				'N1': {colour: 'grey', grid: '14 / 1 / 15 / 2'},
				'N2': {colour: 'grey', grid: '14 / 3 / 15 / 4'},
				'N3': {colour: 'grey', grid: '14 / 5 / 15 / 6'},
				'N4': {colour: 'grey', grid: '14 / 7 / 15 / 8'},
				'N5': {colour: 'grey', grid: '14 / 9 / 15 / 10'},
				'N6': {colour: 'grey', grid: '14 / 11 / 15 / 12'},
				'O1': {colour: 'white', grid: '15 / 2 / 16 / 3'},
				'O2': {colour: 'white', grid: '15 / 4 / 16 / 5'},
				'O3': {colour: 'white', grid: '15 / 6 / 16 / 7'},
				'O4': {colour: 'white', grid: '15 / 8 / 16 / 9'},
				'O5': {colour: 'white', grid: '15 / 10 / 16 / 11'},
				'P1': {colour: 'black', grid: '16 / 1 / 17 / 2'},
				'P2': {colour: 'black', grid: '16 / 3 / 17 / 4'},
				'P3': {colour: 'black', grid: '16 / 5 / 17 / 6'},
				'P4': {colour: 'black', grid: '16 / 7 / 17 / 8'},
				'P5': {colour: 'black', grid: '16 / 9 / 17 / 10'},
				'P6': {colour: 'black', grid: '16 / 11 / 17 / 12'},
				'Q1': {colour: 'grey', grid: '17 / 2 / 18 / 3'},
				'Q2': {colour: 'grey', grid: '17 / 4 / 18 / 5'},
				'Q3': {colour: 'grey', grid: '17 / 6 / 18 / 7'},
				'Q4': {colour: 'grey', grid: '17 / 8 / 18 / 9'},
				'Q5': {colour: 'grey', grid: '17 / 10 / 18 / 11'},
				'R1': {colour: 'white', grid: '18 / 3 / 19 / 4'},
				'R2': {colour: 'white', grid: '18 / 5 / 19 / 6'},
				'R3': {colour: 'white', grid: '18 / 7 / 19 / 8'},
				'R4': {colour: 'white', grid: '18 / 9 / 19 / 10'},
				'S1': {colour: 'black', grid: '19 / 4 / 20 / 5'},
				'S2': {colour: 'black', grid: '19 / 6 / 20 / 7'},
				'S3': {colour: 'black', grid: '19 / 8 / 20 / 9'},
				'T1': {colour: 'grey', grid: '20 / 5 / 21 / 6'},
				'T2': {colour: 'grey', grid: '20 / 7 / 21 / 8'},
				'U1': {colour: 'white', grid: '21 / 6 / 22 / 7'},
			},
			pieaces: {
				'Q1': { colour: 'white', shape: 'pawn' },
				'P2': { colour: 'white', shape: 'pawn' },
				'O2': { colour: 'white', shape: 'pawn' },
				'N3': { colour: 'white', shape: 'pawn' },
				'M3': { colour: 'white', shape: 'pawn' },
				'N4': { colour: 'white', shape: 'pawn' },
				'O4': { colour: 'white', shape: 'pawn' },
				'P5': { colour: 'white', shape: 'pawn' },
				'Q5': { colour: 'white', shape: 'pawn' },
				'R1': { colour: 'white', shape: 'rook' },
				'R4': { colour: 'white', shape: 'rook' },
				'S1': { colour: 'white', shape: 'knight' },
				'S3': { colour: 'white', shape: 'knight' },
				'T1': { colour: 'white', shape: 'queen' },
				'T2': { colour: 'white', shape: 'king' },
				'U1': { colour: 'white', shape: 'bishop' },
				'S2': { colour: 'white', shape: 'bishop' },
				'Q3': { colour: 'white', shape: 'bishop' },
				'E1': { colour: 'black', shape: 'pawn' },
				'F2': { colour: 'black', shape: 'pawn' },
				'G2': { colour: 'black', shape: 'pawn' },
				'H3': { colour: 'black', shape: 'pawn' },
				'I3': { colour: 'black', shape: 'pawn' },
				'H4': { colour: 'black', shape: 'pawn' },
				'G4': { colour: 'black', shape: 'pawn' },
				'F5': { colour: 'black', shape: 'pawn' },
				'E5': { colour: 'black', shape: 'pawn' },
				'D1': { colour: 'black', shape: 'rook' },
				'D4': { colour: 'black', shape: 'rook' },
				'C1': { colour: 'black', shape: 'knight' },
				'C3': { colour: 'black', shape: 'knight' },
				'B1': { colour: 'black', shape: 'queen' },
				'B2': { colour: 'black', shape: 'king' },
				'A1': { colour: 'black', shape: 'bishop' },
				'C2': { colour: 'black', shape: 'bishop' },
				'E3': { colour: 'black', shape: 'bishop' },
			}
		};
    },
    mounted() {
    },
    methods: {}
})

</script>

<template>
	<main>
		<section class="board">
			<template v-for="info, id of boardIDs">
				<template v-if="Object.keys(pieaces).includes(id)">
					<HexItem 
						:colour="info.colour" 
						:id="id" 
						:style="{ 'grid-area': info.grid }"
						:pClass="pieaces[id].shape"
						:pColour="pieaces[id].colour"
					/>
				</template>
				<template v-else>
					<HexItem 
						:colour="info.colour" 
						:id="id" 
						:style="{ 'grid-area': info.grid }"
					/>
				</template>
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
}
</style>
