<template>
	<main>
		<div class="container-sml">
			<h1 class="title">
				<router-link to="/" class="forofour">404</router-link>
			</h1>
			<p class="top">
				It seems like this page doesn't exist. You might find what you're
				looking for at
				<a
					rel="noopener noreferrer"
					:href="`https://arhn.us${$route.fullPath}`"
					style="word-wrap: break-word"
					target="_blank"
					>{{ `arhn.us${$route.fullPath}` }}</a
				>.
			</p>
			<p class="btm">
				Or you can
				<router-link to="/">go back home</router-link>, or
				<router-link to="/explore#contact">contact me</router-link> if you think
				this is a mistake.
			</p>
			<div v-if="!nosocials" class="yo">
				<a
					href="https://twitter.com/arhaanbahadur"
					rel="noopener noreferrer"
					target="_blank"
				>
					<bx-bxl-twitter />
				</a>
				<a
					href="https://instagram.com/arhaan_bahadur"
					rel="noopener noreferrer"
					target="_blank"
				>
					<carbon-logo-instagram />
				</a>
				<a
					href="https://github.com/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<carbon-logo-github />
				</a>
				<a
					href="https://open.spotify.com/user/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<bx-bxl-spotify />
				</a>

				<a
					href="//linkedin.com/in/arhaanb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<carbon-logo-linkedin />
				</a>

				<a
					href="//behance.net/arhaanbahadur"
					target="_blank"
					rel="noopener noreferrer"
				>
					<bx-bxl-behance />
				</a>

				<a
					href="mailto:arhaanb@gmail.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<!-- hi@arhaanb.co -->
					<bx-bx-mail-send />
				</a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: {
		nosocials: Boolean
	}
}
</script>

<style scoped>
.forofour {
	border: none;
	opacity: 1;
	color: var(--red-text);
	/* color: rgb(8, 75, 119); */
	transition: 0.2s;
}

.forofour:hover {
	opacity: 0.75;
}

.container-sml {
	margin: 0 auto;
	padding: 0 2em;
	max-width: 25em;
}

p.top {
	margin: 0.5em 0;
}
p.btm {
	margin-bottom: 1em;
}
.yo {
	margin-top: 0;
}
p {
	opacity: 1;
}

.yo a {
	padding: 0.35em;
	font-size: 1.1em;
	transition: 0.2s;
}

.yo a:hover {
	color: chocolate;
}

.title {
	margin-top: 7em;
}
</style>
