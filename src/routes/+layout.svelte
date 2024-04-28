<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

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
