<template>
	<div>
		<router-link :to="to" class="flexer">
			<h5 class="main">{{ title ? title : 'Title' }}</h5>
			<h5 class="desc">{{ desc ? desc : 'This is a description' }}</h5>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		to: String,
		desc: String
	}
}
</script>

<style lang="scss" scoped>
.flexer {
	display: flex;
	justify-content: start;
	align-items: baseline;
	padding: 0.75em 1em;
	border-radius: 0.5em;
	transition: 0.3s;
	h5 {
		margin: 0;
		font-size: 1.3em;
		&.desc {
			font-size: 1em;
		}
		&.main {
			width: 17%;
			// margin-right: 0.5em;
		}
	}

	&:hover {
		background-color: rgba($color: #222, $alpha: 0.0575);
	}
}

@media (max-width: 750px) {
	.main {
		width: auto !important;
    margin-right: 0.5em !important;
	}
  .flexer {
    margin-bottom: 0.5em;
  }
}

.desc {
	opacity: 0.75;
}
</style>
