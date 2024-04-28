<script lang="ts">
	// import { fade } from 'svelte/transition';
	import autoAnimate from '@formkit/auto-animate';
	export let tooltip: string;
	export let position: { x: number; y: number };

	let tooltipEl: HTMLDivElement;
</script>

<div
	class="w-screen h-screen absolute top-0 left-0 z-[9999] pointer-events-none"
	use:autoAnimate={{ duration: 150, easing: 'ease-in-out' }}
>
	{#if !!tooltip}
		<div
			bind:this={tooltipEl}
			class="absolute whitespace-nowrap shadow-background-950 shadow-md pl-2 pr-2 pt-1 pb-1 bg-background-925 text-text-100 rounded-lg after:absolute after:top-[calc(100%-1px)] after:left-1/2 after:-ml-2 after:border-8 after:border-t-background-925 after:border-b-transparent after:border-l-transparent after:border-r-transparent"
			style={`top: ${position.y - 45 + window.scrollY}px; left: ${position.x - tooltipEl?.getBoundingClientRect().width / 2 + window.scrollX}px;`}
		>
			{tooltip}
		</div>
	{/if}
</div>
