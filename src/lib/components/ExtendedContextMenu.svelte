<script lang="ts">
	// const handleMove = (e: MouseEvent) => {
	// 	const target =
	// 		(e.target as HTMLElement).tagName === 'DIV'
	// 			? (e.target as HTMLElement)
	// 			: (e.target as HTMLElement)?.parentElement;

	// 	if (!target) return;

	// 	for (const button of target.getElementsByTagName('button') as HTMLCollectionOf<HTMLElement>) {
	// 		const rect = button.getBoundingClientRect(),
	// 			x = e.clientX - rect.left,
	// 			y = e.clientY - rect.top;

	// 		button.style.setProperty('--tw-mouse-x', x + 'px');
	// 		button.style.setProperty('--tw-mouse-y', y + 'px');
	// 	}
	// };
</script>

<!-- 
	on:mousemove={handleMove}
 -->
<div
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="extended-context-menu"
	tabindex="0"
	class="flex flex-col w-fit absolute bg-background-900 rounded-2xl shadow-background-950 shadow-md text-text-200 overflow-hidden text-sm"
>
	<div class="h-[35px] opacity-50 p-1.5 text-center flex items-center justify-center">
		{new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
	</div>
	<hr class="opacity-20" />
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="material-symbols-outlined ml-[2.5px] mr-[6px] inline-flex justify-center items-center scale-110 translate-y-[3px]"
			>add_reaction</i
		>Add Reaction</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-quote ml-1 mr-2 inline-flex justify-center items-center scale-110 translate-y-[3px]"
		></i>Quote</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-pencil-fill ml-1 mr-2 inline-flex justify-center items-center scale-90 translate-y-[3px]"
		></i>Edit</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="material-symbols-outlined ml-[1.5px] mr-[5px] inline-flex justify-center items-center scale-90 translate-y-[5px]"
			>mark_chat_unread</i
		>Mark Unread</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-code-slash ml-1 mr-2 inline-flex justify-center items-center scale-100 translate-y-[3px]"
		></i>View Source</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="material-symbols-outlined ml-[2.5px] mr-[6px] inline-flex justify-center items-center scale-100 translate-y-[3px]"
			>lock</i
		>View Signature</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-copy ml-1 mr-2 inline-flex justify-center items-center scale-100 translate-y-[2.5px]"
		></i>Copy ID</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-text-paragraph ml-1 mr-2 inline-flex justify-center items-center scale-100 translate-y-[2.5px]"
		></i>Copy Content</button
	>
	<button
		class="transition-colors duration-200 active:bg-none active:bg-background-700 hover:bg-radient-circle-pos from-background-700 to-background-900 from-0% to-70% text-left p-1.5 pr-2.5 h-[35px] capture-movement"
		><i
			class="bi bi-markdown-fill ml-1 mr-2 inline-flex justify-center items-center scale-100 translate-y-[2.5px]"
		></i>View Markdown</button
	>
	<button
		class="transition-colors hover:bg-red-500 active:bg-red-400 text-red-500 hover:text-text-100 text-left p-1.5 pr-2.5 h-[35px]"
		><i
			class="bi bi-trash-fill ml-1 mr-2 inline-flex justify-center items-center scale-100 translate-y-[3px]"
		></i>Delete</button
	>
</div>
