<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	type Author = {
		name: string;
	};
	type Message = {
		content: string;
		quote?: Message;
		author: Author;
		edited?: Date;
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
		} else {
			const content = target.closest('p');
			if (!content) return;
			contextMenu.style.top = `${content.offsetTop - 8 - 16}px`;
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

	const dispatchTooltip = (event: any, text: string) => {
		const target = event.target.tagName === 'I' ? event.target.parentElement : event.target;
		dispatch('show-tooltip', {
			event,
			text,
			position: {
				x: target?.getBoundingClientRect().x + target?.getBoundingClientRect().width / 2,
				y: target?.getBoundingClientRect().y
			}
		});
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
								class="aspect-square h-4 opacity-60 scale-100 rounded-full inline-block mr-1.5 translate-y-[2px]"
							/><button
								class="text-text-100 opacity-60 font-semibold hover:underline scale-100 translate-y-[2px]"
								>{message.quote.author.name}:</button
							></span
						>
						<span
							><button class="text-text-100 opacity-60 hover:opacity-90 max-w-52 truncate"
								>{message.quote.content}</button
							></span
						>
					</div>
				{/if}
				{message.content}
				{#if message.edited}
					<span
						class="inline-flex flex-row justify-center items-center translate-y-0.5"
						on:mouseover={(e) =>
							dispatchTooltip(
								e,
								`Edited ${message.edited?.toLocaleDateString()}  ${message.edited?.toLocaleTimeString()}`
							)}
						on:focus={(e) =>
							dispatchTooltip(
								e,
								`Edited ${message.edited?.toLocaleDateString()} ${message.edited?.toLocaleTimeString()}`
							)}
						on:mouseleave={() => dispatch('hide-tooltip')}
						on:focusout={() => dispatch('hide-tooltip')}
						role="tooltip"><i class="bi bi-pencil-fill opacity-60 scale-90 inline-flex"></i></span
					>
				{/if}
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
				on:mouseover={(e) => dispatchTooltip(e, 'Quote')}
				on:focus={(e) => dispatchTooltip(e, 'Quote')}
				on:mouseleave={() => dispatch('hide-tooltip')}
				on:focusout={() => dispatch('hide-tooltip')}
				class="transition-colors h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
				><i class="bi bi-quote scale-125 flex justify-center items-center translate-y-[1px]"
				></i></button
			>
			{#if side === 'right'}
				<button
					on:mouseover={(e) => dispatchTooltip(e, 'Edit')}
					on:focus={(e) => dispatchTooltip(e, 'Edit')}
					on:mouseleave={() => dispatch('hide-tooltip')}
					on:focusout={() => dispatch('hide-tooltip')}
					class="transition-colors h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
					><i class="bi bi-pencil-fill flex justify-center items-center"></i></button
				>
				<button
					on:mouseover={(e) => dispatchTooltip(e, 'Delete')}
					on:focus={(e) => dispatchTooltip(e, 'Delete')}
					on:mouseleave={() => dispatch('hide-tooltip')}
					on:focusout={() => dispatch('hide-tooltip')}
					class="transition-colors h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center group"
					><i
						class="bi bi-trash-fill flex justify-center items-center group-hover:text-red-500 transition-colors"
					></i></button
				>
			{/if}
			<button
				on:mouseover={(e) => dispatchTooltip(e, 'More Options')}
				on:focus={(e) => dispatchTooltip(e, 'More Options')}
				on:mouseleave={() => dispatch('hide-tooltip')}
				on:focusout={() => dispatch('hide-tooltip')}
				class="transition-colors h-full aspect-square p-2 bg-transparent hover:bg-background-800 flex justify-center items-center"
				><i class="bi bi-three-dots-vertical flex justify-center items-center"></i></button
			>
		</div>
	</div>
</div>
