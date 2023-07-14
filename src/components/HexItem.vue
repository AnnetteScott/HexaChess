<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ChessPiece from './ChessPiece.vue';

export default defineComponent({
	name: 'HexItem',
	emits: ['clicked'],
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
		highlight: {
			type: Boolean,
			default: true,
			required: true
		},
		pColour: {
			type: String as PropType<'black' | 'white'>,
			required: false
		},
		type: {
			type: String,
			required: false
		},
	},
	components: {
		ChessPiece
	},
})

</script>

<template>
	<div :id="id" :class="{hexagon: true }" :style="{'color': colour}" @click="$emit('clicked')">
		<ChessPiece v-if="type" :colour="pColour" :type="type" style="z-index: 3;" />
		<div :class="{smallHexagon: highlight }"></div>
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

.smallHexagon {
	position: absolute;
	z-index: 1;
	display: grid;
	place-content: center;
	place-items: center;
	width: 49px;
	height: 80px;
	color: #00ff11aa;
	background-color: currentColor;
}
.smallHexagon:before {
	content: "";
	position: absolute;
	z-index: 0;
	left: -22px;
	width: 0;
	height: 0;
	color: inherit;
	border-top: 40px solid transparent;
	border-right: 22px solid currentColor;
	border-bottom: 40px solid transparent;
}
.smallHexagon:after {
	content: "";
	position: absolute;
	z-index: 0;
	right: -22px;
	width: 0;
	height: 0;
	color: inherit;
	border-top: 40px solid transparent;
	border-left: 22px solid currentColor;
	border-bottom: 40px solid transparent;
}


</style>
