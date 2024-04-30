<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ExtendedContextMenu from '$lib/components/ExtendedContextMenu.svelte';
	import FormattedMessageContent from '$lib/components/FormattedMessageContent.svelte';
	import Message from '$lib/components/Message.svelte';
	import MousePositionContainer from '$lib/components/MousePositionContainer.svelte';
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
</script>

<MousePositionContainer></MousePositionContainer>
<TooltipContainer></TooltipContainer>

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

<Button><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Primary</Button>
<Button disabled><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Primary</Button>
<Button variant="secondary"><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Secondary</Button>
<Button variant="secondary" disabled
	><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Secondary disabled</Button
>
<Button variant="danger"><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Danger</Button>
<Button variant="danger" disabled
	><span><i class="bi bi-pencil-fill mr-1.5"></i></span>Danger disabled</Button
>

<br />
<br />

<div class="w-full flex justify-center gap-2">
	<div
		data-tooltip="This user is verified"
		data-tooltip-offset="top"
		role="tooltip"
		class="rounded-full text-green-500 border-green-500 border-2 bg-green-500 bg-opacity-10 pl-2 pr-2 w-fit h-fit"
	>
		Verified
	</div>

	<div
		data-tooltip="This user is not verified"
		data-tooltip-offset="bottom"
		role="tooltip"
		class="rounded-full text-orange-400 border-orange-400 bg-orange-500 bg-opacity-10 border-2 pl-2 pr-2 w-fit h-fit"
	>
		Unverified
	</div>

	<div
		data-tooltip="Message here"
		data-tooltip-offset="left"
		role="tooltip"
		class="rounded-full text-yellow-500 border-yellow-500 border-2 bg-yellow-500 bg-opacity-10 pl-2 pr-2 w-fit h-fit"
	>
		Message here
	</div>

	<div
		data-tooltip="Message here"
		data-tooltip-offset="right"
		role="tooltip"
		class="rounded-full text-red-400 border-red-400 bg-red-500 bg-opacity-10 border-2 pl-2 pr-2 w-fit h-fit"
	>
		Message here
	</div>
</div>

<br />

<div class="w-1/2 flex flex-col">
	<Message
		messages={[
			{
				content: 'Hello, how are you? :grinning-face-with-smiling-eyes:',
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
		messages={[
			{
				content: "I'm doing well, thank you!",
				author: {
					name: 'Jane Doe'
				},
				quote: {
					content: 'Hello, how are you? :grinning-face-with-smiling-eyes:',
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

	<Message
		messages={[
			{
				content: 'Look at my message!',
				author: {
					name: 'Jane Doe'
				},
				reactions: [
					{
						emoji: ':thumbs-up:',
						users: [
							{
								name: 'Jane Doe'
							}
						],
						reacted: true
					},
					{
						emoji: ':skull:',
						users: [
							{
								name: 'Jane Doe'
							},
							{
								name: 'John Doe'
							},
							{
								name: 'Jane Doe 2'
							}
						],
						reacted: true
					},
					{
						emoji: ':grinning-face:',
						users: [
							{
								name: 'John Doe'
							}
						],
						reacted: false
					}
				]
			}
		]}
		side="right"
	></Message>

	<Message
		messages={[
			{
				content:
					'Emojis galore!!!! :grinning-face: :grinning-face: :grinning-face: :thumbs-up: :fire:',
				author: {
					name: 'Jane Doe'
				}
			}
		]}
		side="right"
	></Message>
</div>

<div class="text-text-100">
	<FormattedMessageContent
		content="test :emoji: testinggg :skull: hello :grinning-face-with-smiling-eyes:"
	></FormattedMessageContent>
	<br />
	<FormattedMessageContent content="no way frr :fire: :skull:"></FormattedMessageContent>
</div>

<br />

<div class="p-2 mb-52 h-56">
	<ExtendedContextMenu></ExtendedContextMenu>
</div>

<br />
<br />

<style>
	:global(body) {
		padding: 10px;
	}
</style>
