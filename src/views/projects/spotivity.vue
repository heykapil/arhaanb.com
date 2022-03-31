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
		<div v-else>
			<h3 class="fancy">loading page...</h3>
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
</style>
