<script setup lang="ts">
import { NotionRenderer, getPageBlocks, useGetPageBlocks } from 'vue3-notion'
import { projects } from './aaprojects.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Fourerr from '../NotFound.vue'

const route = useRoute()
const data = ref()

onMounted(async () => {
	data.value = await getPageBlocks(
		projects.find((x) => x.id == route.params.id)?.notion ||
			'bc97b55870d9479181facc653dd9a6f6 j'
	)

	// console.log(data?.value || 'no page found')
})
</script>

<template>
	<main>
		<div v-if="data == 'TypeError: Failed to fetch'">
			<div class="errnotion">
				<Fourerr nosocials />
			</div>
		</div>
		<div class="cont" v-if="data">
			<NotionRenderer :blockMap="data" fullPage prism katex />
			<br />
		</div>
		<div v-else class="cont">
			<Notionloader />
		</div>
	</main>
</template>

<style>
.errnotion {
	margin-top: -5em;
	margin-bottom: 11em;
}

@media (max-width: 750px) {
	.errnotion {
		margin-top: -3em;
		margin-bottom: 12em;
	}
}
</style>
