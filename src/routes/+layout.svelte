<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		const emojiCss = await fetch(
			'https://cdn.jsdelivr.net/gh/iamludal/twemoji-awesome@1.1/twemoji-awesome.min.css'
		).then((res) => res.text());
		const emojis =
			emojiCss
				.match(/(?<=\.twa-)[A-Za-z-]+(?=,|:|{| )/gm)
				?.filter((e) => !['lg', '2x', '3x', '4x', '5x', ''].includes(e)) || [];
		window.emojis = emojis;
	});
</script>

<slot />

<style lang="postcss">
	@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
	@import url('https://cdn.jsdelivr.net/gh/iamludal/twemoji-awesome@1.1/twemoji-awesome.min.css');

	:global(:root) {
		--linearPrimarySecondary: linear-gradient(#6a42ec, #a791ed);
		--linearPrimaryAccent: linear-gradient(#6a42ec, #4252ed);
		--linearSecondaryAccent: linear-gradient(#a791ed, #4252ed);
		--radialPrimarySecondary: radial-gradient(#6a42ec, #a791ed);
		--radialPrimaryAccent: radial-gradient(#6a42ec, #4252ed);
		--radialSecondaryAccent: radial-gradient(#a791ed, #4252ed);
	}

	:global(html) {
		font-family: 'Montserrat', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		ascent-override: 90%;
	}

	:global(body) {
		background-color: theme(colors.background.950);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Commissioner', sans-serif;
	}

	:global(h1) {
		font-weight: 500;
		font-stretch: 125%;
		font-variation-settings:
			'slnt' 0,
			'FLAR' 100,
			'VOLM' 0;
	}
	:global(h2) {
		font-weight: 300;
		font-stretch: 125%;
		font-variation-settings:
			'slnt' 0,
			'FLAR' 100,
			'VOLM' 0;
	}
</style>
