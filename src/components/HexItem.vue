<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ChessPiece from './ChessPiece.vue';

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
			type: String as PropType<'black' | 'white'>,
			required: false
		},
		shape: {
			type: String,
			required: false
		},
	},
	components: {
		ChessPiece
	}
})

</script>

<template>
	<div :id="id" class="hexagon" :style="{'color': colour}">
		<ChessPiece v-if="shape" :colour="pColour" :type="shape" style="z-index: 1;" />
	</div>
</template>

<style scoped>
.hexagon {
	display: grid;
	place-content: center;
	place-items: center;
	width: 55px;
	height: 90px;
	background-color: currentColor;
}
.hexagon:before {
	content: "";
	position: absolute;
	z-index: 0;
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
	z-index: 0;
	right: -25px;
	width: 0;
	height: 0;
	color: inherit;
	border-top: 45px solid transparent;
	border-left: 25px solid currentColor;
	border-bottom: 45px solid transparent;
}
</style>
