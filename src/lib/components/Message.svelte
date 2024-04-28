<script lang="ts">
	export let messages: string[] = [];
	export let side: 'left' | 'right' = 'right';

	const calculateContextMenuPosition = (event: any, side: 'left' | 'right') => {
		const target: HTMLElement = event.target;

		const container = target.closest('#container') as HTMLElement;

		if (!container) return;
		const message = container.getElementsByTagName('div')[0];
		if (!message) return;
		const contextMenu = message.getElementsByTagName('div')[0];
		if (!contextMenu) return;

		const contextMenuWidth = contextMenu.getBoundingClientRect().width;
		const messageWidth = message.offsetWidth;
		const containerWidth = container.offsetWidth;

		const contextMenuCellWidth = contextMenuWidth / contextMenu.children.length;

		contextMenu.style.visibility = 'visible';
		contextMenu.style.top = `-16px`;

		if (target.tagName === 'P') {
			contextMenu.style.top = `${target.offsetTop - 8 - 16}px`;
		}

		if (side === 'left') {
			let positionRight = contextMenuWidth - contextMenuCellWidth;

			if (messageWidth + positionRight + contextMenuCellWidth > containerWidth) {
				const messageMarginRight = parseFloat(getComputedStyle(message).marginRight);

				positionRight = containerWidth - (messageWidth + messageMarginRight * 2) + 8;
			}

			contextMenu.style.right = `-${positionRight}px`;
		} else if (side === 'right') {
			let positionLeft = contextMenuWidth - contextMenuCellWidth;

			if (messageWidth + positionLeft + contextMenuCellWidth > containerWidth) {
				const messageMarginLeft = parseFloat(getComputedStyle(message).marginLeft);

				positionLeft = containerWidth - (messageWidth + messageMarginLeft * 2) + 8;
			}

			contextMenu.style.left = `-${positionLeft}px`;
		}
	};

	const hideContextMenu = (event: any) => {
		const target: HTMLElement = event.target;
		const container = target.closest('#container') as HTMLElement;

		if (!container) return;
		const message = container.getElementsByTagName('div')[0];
		if (!message) return;
		const contextMenu = message.getElementsByTagName('div')[0];
		if (!contextMenu) return;

		if (contextMenu.matches(':hover')) return;

		contextMenu.style.visibility = 'hidden';
	};
</script>

<div class="w-full flex flex-col" id="container">
	<div
		class="p-2 w-fit rounded-xl m-2 relative"
		class:bg-background-700={side === 'left'}
		class:rounded-es-none={side === 'left'}
		class:bg-primary-600={side === 'right'}
		class:rounded-ee-none={side === 'right'}
		class:place-self-end={side === 'right'}
	>
		{#each messages as message}
			<p
				on:mouseover={(e) => calculateContextMenuPosition(e, side)}
				on:mouseleave={hideContextMenu}
				on:focus={(e) => calculateContextMenuPosition(e, side)}
				on:focusout={hideContextMenu}
				role="listitem"
				class="text-text-100"
			>
				{message}
			</p>
		{/each}
		<div
			on:mouseleave={hideContextMenu}
			on:focusout={hideContextMenu}
			role="listitem"
			class="flex invisible flex-row absolute bg-background-900 rounded-full drop-shadow-lg text-text-100 overflow-hidden"
		>
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center align-middle"
				><i class="bi bi-reply-fill flex justify-center align-middle"></i></button
			>
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center align-middle"
				><i class="bi bi-pencil-fill flex justify-center align-middle"></i></button
			>
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center align-middle"
				><i class="bi bi-trash-fill flex justify-center align-middle"></i></button
			>
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center align-middle"
				><i class="bi bi-three-dots-vertical flex justify-center align-middle"></i></button
			>
		</div>
	</div>
</div>
