<script lang="ts">
	type Author = {
		name: string;
	};
	type Message = {
		content: string;
		quote?: Message;
		author: Author;
	};

	export let messages: Message[] = [];
	export let side: 'left' | 'right' = 'right';

	const calculateContextMenuPosition = (event: any, side: 'left' | 'right') => {
		const target: HTMLElement = event.target;

		const container = target.closest('#container') as HTMLElement;

		if (!container) return;
		const message = container.getElementsByTagName('div')[0];
		if (!message) return;
		const contextMenu = message.querySelector('#context-menu') as HTMLElement;
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
		const contextMenu = message.querySelector('#context-menu') as HTMLElement;
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
				class:text-left={side === 'left'}
				class:text-right={side === 'right'}
			>
				{#if message.quote}
					<div>
						<span class="inline-flex"><i class="bi bi-quote scale-125 opacity-60"></i></span>
						<span class="inline-flex flex-row justify-center items-center"
							><img
								src="https://ui-avatars.com/api/?name={message.quote.author
									.name}&background=ffffff&color=7d8590&length=1&size=256&bold=true"
								alt="profile"
								class="aspect-square h-4 opacity-60 scale-100 rounded-full inline-block mr-1.5"
								style="--tw-translate-y: 2px;"
							/><button
								class="text-text-100 opacity-60 font-semibold hover:underline scale-100"
								style="--tw-translate-y: 2px;">{message.quote.author.name}:</button
							></span
						>
						<span
							><button class="text-text-100 opacity-60 hover:opacity-90"
								>{message.quote.content}</button
							></span
						>
					</div>
				{/if}
				{message.content}
			</p>
		{/each}
		<div
			on:mouseleave={hideContextMenu}
			on:focusout={hideContextMenu}
			role="listitem"
			id="context-menu"
			class="flex invisible flex-row absolute bg-background-900 rounded-full shadow-background-950 shadow-md text-text-100 overflow-hidden"
		>
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
				><i
					class="bi bi-quote scale-125 flex justify-center items-center"
					style="--tw-translate-y: 1px;"
				></i></button
			>
			{#if side === 'right'}
				<button
					class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
					><i class="bi bi-pencil-fill flex justify-center items-center"></i></button
				>
				<button
					class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center group"
					><i class="bi bi-trash-fill flex justify-center items-center group-hover:text-red-500"
					></i></button
				>
			{/if}
			<button
				class="h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
				><i class="bi bi-three-dots-vertical flex justify-center items-center"></i></button
			>
		</div>
	</div>
</div>
