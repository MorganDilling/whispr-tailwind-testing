<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import TooltipContainer from '$lib/components/TooltipContainer.svelte';

	let inputBox: HTMLTextAreaElement;

	const submit = () => {
		console.log('submit');
	};

	const autoHeight = () => {
		requestAnimationFrame(() => {
			inputBox.style.height = '1px';
			inputBox.style.height = inputBox.scrollHeight + 'px';
		});
	};

	const keyEvent = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			console.log('enter pressed', 'event.shiftKey', event.shiftKey);

			if (!event.shiftKey) {
				submit();

				event.preventDefault();
			}
		}
		autoHeight();
		console.log(JSON.stringify(inputBox.value));
	};

	// tooltips
	let tooltip = '';
	let position = { x: 0, y: 0 };

	const showTooltip = (e: any) => {
		tooltip = e.detail.text;
		position = e.detail.position;
	};
	const showLocalTooltip = (event: any, text: string) => {
		const target = event.target.tagName === 'I' ? event.target.parentElement : event.target;
		position = {
			x: target?.getBoundingClientRect().x + target?.getBoundingClientRect().width / 2,
			y: target?.getBoundingClientRect().y
		};
		tooltip = text;
	};
	const hideTooltip = () => {
		tooltip = '';
	};
</script>

<TooltipContainer {tooltip} {position}></TooltipContainer>

<h1 class="text-text-100 text-5xl inline-block">
	Privacy <h1
		class="inline-block bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text"
	>
		Matters.
	</h1>
</h1>
<h2 class="text-text-100 text-3xl">Some text</h2>
<p class="text-text-500">Some more text</p>
<br />

<div class="w-80">
	<label class="relative block">
		<span class="sr-only">Search</span>
		<span
			class="absolute inset-y-0 left-0 flex items-center pl-3 pr-2.5 bg-background-700 rounded-l-full"
			><i class="bi bi-search text-background-400"></i></span
		>
		<input
			type="text"
			class="transition-all ease-in-out text-text-100 p-2 block w-full placeholder:text-text-400 pl-12 pr-4 bg-background-800 rounded-full outline-none focus:ring-2 focus:ring-background-400"
			placeholder="Search"
			name="search"
		/>
	</label>
</div>

<br />

<div>
	<label class="relative block">
		<span class="sr-only">Send a message</span>
		<textarea
			on:keypress={keyEvent}
			on:keydown={keyEvent}
			on:paste={autoHeight}
			bind:this={inputBox}
			placeholder="Send a message"
			rows="1"
			style="border-radius: 1.25rem;"
			class="text-text-100 p-2 block w-full placeholder:text-text-400 pr-12 pl-4 bg-background-800 outline-none resize-none overflow-hidden"
		/>
		<span
			class="absolute inset-y-0 right-0 flex items-center pl-3 pr-4 bg-background-700 justify-start pt-2 pb-2 flex-col"
			style="border-top-right-radius: 1.25rem; border-bottom-right-radius: 1.25rem;"
			><button on:click={submit} class="h-fit"
				><i class="bi bi-send-fill text-text-400 hover:text-text-100 transition-colors"></i></button
			></span
		>
	</label>
</div>

<br />

<button
	class="transition-colors text-text-100 p-2 bg-primary-600 rounded-full pl-3.5 pr-3.5 hover:bg-primary-500"
	><span><i class="bi bi-pencil-fill text-text-100 mr-1.5"></i></span>Primary</button
>

<button
	disabled
	class="transition-colors text-text-100 p-2 bg-background-700 rounded-full pl-3.5 pr-3.5 disabled:bg-primary-700 disabled:text-background-400 disabled:cursor-not-allowed"
	><span><i class="bi bi-pencil-fill text-text-400 mr-1.5"></i></span>Primary disabled</button
>

<button
	class="transition-colors text-text-100 p-2 bg-background-700 rounded-full pl-3.5 pr-3.5 hover:bg-background-600"
	><span><i class="bi bi-pencil-fill text-text-400 mr-1.5"></i></span>Secondary</button
>

<button
	disabled
	class="transition-colors text-text-100 p-2 bg-background-700 rounded-full pl-3.5 pr-3.5 disabled:bg-background-700 disabled:text-background-400 disabled:cursor-not-allowed"
	><span><i class="bi bi-pencil-fill text-text-500 mr-1.5"></i></span>Secondary disabled</button
>

<button
	class="transition-colors text-text-100 p-2 bg-red-600 rounded-full pl-3.5 pr-3.5 hover:bg-red-500"
	><span><i class="bi bi-pencil-fill text-text-100 mr-1.5"></i></span>Danger</button
>

<button
	disabled
	class="transition-colors text-text-100 p-2 bg-red-700 rounded-full pl-3.5 pr-3.5 disabled:bg-red-700 disabled:text-red-300 disabled:cursor-not-allowed"
	><span><i class="bi bi-pencil-fill text-red-300 mr-1.5"></i></span>Danger disabled</button
>

<br />
<br />

<div class="w-full flex justify-center gap-2">
	<div
		on:mouseover={(e) => showLocalTooltip(e, 'This user is verified')}
		on:focus={(e) => showLocalTooltip(e, 'This user is verified')}
		on:mouseleave={() => hideTooltip()}
		on:focusout={() => hideTooltip()}
		role="tooltip"
		class="rounded-full text-green-500 border-green-500 border-2 bg-green-500 bg-opacity-10 pl-2 pr-2 w-fit h-fit"
	>
		Verified
	</div>

	<br />

	<div
		on:mouseover={(e) => showLocalTooltip(e, 'This user is not verified')}
		on:focus={(e) => showLocalTooltip(e, 'This user is not verified')}
		on:mouseleave={() => hideTooltip()}
		on:focusout={() => hideTooltip()}
		role="tooltip"
		class="rounded-full text-orange-400 border-orange-400 bg-orange-500 bg-opacity-10 border-2 pl-2 pr-2 w-fit h-fit"
	>
		Unverified
	</div>
</div>

<br />

<div class="w-1/4 flex flex-col">
	<Message
		on:show-tooltip={showTooltip}
		on:hide-tooltip={hideTooltip}
		messages={[
			{
				content: 'Hello, how are you?',
				author: {
					name: 'John Doe'
				}
			},
			{
				content: 'Today is a good day!',
				author: {
					name: 'John Doe'
				},
				edited: new Date()
			}
		]}
		side="left"
	></Message>
	<Message
		on:show-tooltip={showTooltip}
		on:hide-tooltip={hideTooltip}
		messages={[
			{
				content: "I'm doing well, thank you!",
				author: {
					name: 'Jane Doe'
				},
				quote: {
					content: 'Hello, how are you?',
					author: {
						name: 'John Doe'
					}
				}
			},
			{
				content: 'Neat.',
				author: {
					name: 'Jane Doe'
				}
			}
		]}
		side="right"
	></Message>

	<Message
		on:show-tooltip={showTooltip}
		on:hide-tooltip={hideTooltip}
		messages={[
			{
				content: 'Oops typo',
				author: {
					name: 'Jane Doe'
				},
				edited: new Date()
			}
		]}
		side="right"
	></Message>
</div>

<style>
	:global(body) {
		padding: 10px;
	}
</style>
