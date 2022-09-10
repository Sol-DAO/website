<script lang="ts">
	import { slide } from 'svelte/transition';
	import NavigationLinks from '../constants/navigation';

	let isEnabled = false;
</script>

<div
	class="relative flex justify-between md:justify-around items-center py-3 px-10 bg-navbar bg-opacity-30 border-navbar border-b"
>
	<div>
		<img src="/logo.png" class="w-48" alt="Amper Logo" />
	</div>
	<div class="hidden md:flex gap-2">
		{#each NavigationLinks as navLink}
			<a href={navLink.path} class="text-primary-2 hover:text-primary-1 font-medium"
				>{navLink.label}</a
			>
		{/each}
	</div>
	<button
		on:click={() => (isEnabled = !isEnabled)}
		class="md:hidden text-primary-2 hover:text-primary-1"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			{#if !isEnabled}
				<path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			{:else}
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			{/if}
		</svg>
	</button>
	{#if isEnabled}
		<div
			transition:slide
			class="absolute bg-black w-full h-screen top-0 left-0 mt-16 border-navbar border-t border-b flex md:hidden flex-col items-center z-30"
		>
			{#each NavigationLinks as navLink}
				<a
					href={navLink.path}
					class="text-primary-2 hover:text-primary-1 font-medium text-xl hover:bg-navbar active:bg-opacity-30 hover:bg-opacity-50 w-full text-center p-2"
					>{navLink.label}</a
				>
			{/each}
		</div>
	{/if}
</div>
