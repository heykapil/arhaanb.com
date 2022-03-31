<script setup lang="ts">
import { NotionRenderer, useGetPageBlocks } from 'vue3-notion'

const boob = undefined

const { data: blockMap } = useGetPageBlocks(
	boob || 'bc97b55870d9479181facc653dd9a6f6'
)
</script>

<template>
	<main class="cont">
		<div v-if="blockMap">
			<NotionRenderer :blockMap="blockMap" fullPage prism katex />
			<br />
		</div>
		<div class="loadind" v-else>
			<div class="loader"></div>
			<h3 class="fancy loadtext">loading...</h3>
		</div>
	</main>
</template>

<style>
.notion-h1 {
	margin-bottom: 0.3em !important;
}

img {
	user-drag: none;
	-webkit-user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
/* img {
	width: 100% !important;
} */

/* Loader */
.loadind{
	height: 71vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.loadtext {
	text-align: center;
	font-size: 1.8em;
	margin-top: 0.75em;
}
.loader,
.loader:after {
	border-radius: 100%;
	width: 3.5em;
	height: 3.5em;
}
.loader {
	--bor-wid: 0.7em;
	margin: 0 auto;
	font-size: 10px;
	position: relative;
	border: var(--bor-wid) solid rgba(0, 0, 0, 0.2);
	/* border-right: 1.1em solid rgba(0, 0, 0, 0.2);
	border-bottom: 1.1em solid rgba(0, 0, 0, 0.2); */
	border-left: var(--bor-wid) solid var(--red-text);
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load8 1.1s infinite linear;
	animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes load8 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
