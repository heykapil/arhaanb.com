<template>
	<main>
		<div class="cont">
			<!-- <img
			data-aos="fade-in"
			class="topimg"
			src="/me.jpeg"
			alt="Arhaan Bahadur"
			draggable="false"
		/>
		<br /> -->

			<div data-aos="fade-in">
				<h4
					style="margin-top: 1.5em; margin-bottom: -0.35em"
					class="name fancy"
				>
					arhaan bahadur
				</h4>
				<div class="yo zero" style="margin-bottom: 0.55em">
					<h6 class="zero">designer &middot; developer</h6>
				</div>

				<p class="zero" style="margin-bottom: 1em">
					<!-- Hello! I'm {{ `${prefix} ${age}` }} year old developer and designer,
					currently a freshman studying Computer Science. I enjoy participating
					in Hackathons and Design events, and I've won several of them over the
					last few years. Hello!  -->
					Hello! I’m Arhaan, {{ `${prefix} ${age}` }} year old student studying
					Computer Science, currently based in New Delhi. I enjoy participating
					in Hackathons and Design events, and I’ve won several of them over the
					last few years.
					<!-- You can view some of the
					<router-link to="/projects">projects</router-link> I built, or check
					out my
					<a
						rel="noopener noreferrer"
						href="//github.com/arhaanb"
						target="_blank"
						>GitHub account</a
					>. -->
				</p>

				<!-- <p>
					Recently, I co-founded
					<a rel="noopener noreferrer" href="//delhifoundry.co" target="_blank"
						>Delhi Design Foundry</a
					>, and I'm working there as a software engineer and designer.
					Previously, I was the President of my school's technology and
					entrepreneurship club &mdash;
					<a rel="noopener noreferrer" href="//minet.co" target="_blank"
						>MINET</a
					>.
				</p> -->

				<p class="zero">
					I make
					<!-- functional and  -->
					useful products with beautiful user experiences. I'm always looking
					for opportunities to work on new projects and try out new
					technologies. If you want to say hi or work with me, feel free to
					<router-link to="/explore#contact">contact me</router-link> on any of
					my socials.
				</p>
			</div>

			<!-- <img src="https://arhaanbahadur.co/me.jpeg" alt=""> -->
		</div>

		<div class="cont" style="max-width: 43em">
			<br />
			<Page
				data-aos="fade-up"
				title="Portfolio"
				to="/projects"
				desc="I like to build stuff"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="100"
				title="Explore"
				to="/explore"
				desc="More arhaanb"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="150"
				title="Contact"
				to="/explore#contact"
				desc="Let's talk"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Posts"
				to="/posts"
				desc="I write about my projects sometimes"
			/>
		</div>

		<div class="navcont">
			<div class="pics">
				<div class="picsgrid">
					<div v-for="img in links" :key="img">
						<img
							data-aos="fade-up"
							:src="img"
							alt="img"
							draggable="false"
							loading="lazy"
						/>
					</div>
				</div>
				<!-- <h6 class="center zero meirl">me &#38; my friends irl</h6> -->
				<h6 class="center" style="opacity: 0.7">me irl</h6>
			</div>
		</div>

		<!-- <div class="cont socialstuff">
			<h4>My socials</h4>
			<div class="socialgrid">
				<Page icon="ig" title="Instagram" />
				<Page title="Twitter" />
				<Page title="GitHub" />
				<Page title="Behance" />
				<Page title="Spotify" />
				<Page title="LinkedIn" />
				<Page title="Email" />
			</div>
		</div> -->
	</main>
</template>

<script>
export default {
	data() {
		return {
			age: 18,
			prefix: 'an',
			links: [
				'https://i.imgur.com/9XABKYA.png',
				'https://i.imgur.com/Fs8RpqD.png',
				'https://i.imgur.com/WwPlyPg.png',
				'https://i.imgur.com/BIWL50Y.png',
				'https://i.imgur.com/H5Sm2ny.png',
				'https://i.imgur.com/siqW07Z.png'

				// 'https://www.zhayitong.com/assets/img/Frame%201.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%202.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%203.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%204.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%205.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%206.jpg'

				// ---

				// 'https://www.zhayitong.com/assets/img/Frame%207.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%208.jpg',
				// 'https://www.zhayitong.com/assets/img/Frame%209.jpg'
			]
		}
	},
	mounted() {
		const age = this.getAge('7/23/03')
		this.age = age
		this.prefix = [8, 11, 18].includes(age) ? 'an' : 'a'
	},
	methods: {
		getAge(DOB) {
			var today = new Date()
			var birthDate = new Date(DOB)
			var age = today.getFullYear() - birthDate.getFullYear()
			var m = today.getMonth() - birthDate.getMonth()
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age = age - 1
			}
			return age
		}
	}
}
</script>

<style scoped>
.pics img {
	width: 100%;
}

.pics {
	margin-top: 2em;
	margin-bottom: 2.5em;
}
.picsgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(3, 1fr);
}
.socialgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(2, 1fr);
}
.meirl {
	/* margin-top: 2em; */
	font-size: 1.1em;
}
@media (max-width: 750px) {
	.meirl {
		margin-top: 0;
	}
	.picsgrid,
	.socialgrid {
		display: grid;
		/* grid-gap: 3em; */
		grid-gap: 0;
		grid-template-columns: repeat(1, 1fr);
	}
	.pics {
		margin-top: 0;
		margin-bottom: 0;
	}
}
.yo,
.name {
	margin: 0;
	font-size: 2.15em;
}
h1 {
	font-size: 5em;
	margin: 0;
}
.subtitle {
	margin: 0;
	font-size: 2em;
	font-weight: 500;
	opacity: 0.65;
	margin-top: -0.25em;
}
.subtitle a {
	border: none;
}
.main {
	margin-top: 12em;
}
img.topimg {
	width: 10em;
	border-radius: 0.5em;
	margin-bottom: 1em;
}
.vh {
	margin: 0 auto;
	max-width: 50em;
	margin-top: 20vh;
}
.sml {
	font-size: 0.5em;
}
.nav a {
	border: none;
	margin: 0 1em;
	font-size: 1em;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}
.nav {
	margin-top: 1em;
}
.yo a {
	transition: 0.3s;
}
.yo a:hover {
	color: #69e;
}
.topimg {
	margin-top: 0.5em;
}
@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
	}
}
</style>
