<script lang="ts" setup>
import bishopwhite from '@/pieces/white/pawn.svg'
</script>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
	name: 'HexItem',
	props: {
		colour: {
			type: String,
			default: 'black',
			required: true
		},
		id: {
			type: String,
			required: true
		},
		pColour: {
			type: String,
			required: false
		},
		pClass: {
			type: String,
			required: false
		},
	}
})

</script>

<template>
	<div :id="id" class="hexagon" :style="{'color': colour}">
		<div v-if="pColour"
			:class="pClass + pColour +' pieace'" 
			:style="{ backgroundImage: `url(${bishopwhite})` }"
		>
		</div>
	</div>
</template>

<style scoped>
.hexagon {
	display: grid;
	place-items: center;
	width: 55px;
	height: 90px;
	background-color: currentColor;
}
.hexagon:before {
	content: "";
	position: absolute;
	left: -25px;
	width: 0;
	height: 0;
	color: inherit;
	border-top: 45px solid transparent;
	border-right: 25px solid currentColor;
	border-bottom: 45px solid transparent;
}
.hexagon:after {
	content: "";
	position: absolute;
	right: -25px;
	width: 0;
	height: 0;
	color: inherit;
	border-top: 45px solid transparent;
	border-left: 25px solid currentColor;
	border-bottom: 45px solid transparent;
}

.pieace{
	width: 100%;
	aspect-ratio: 1;
	border: 1px solid black;
	border-radius: 100%;
	background-color: currentColor;
}
</style>
