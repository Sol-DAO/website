<script lang="ts">
	import { slide } from 'svelte/transition';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
</script>

<div class="noisepattern" />
<img
	class="fixed -scale-x-100 -left-10 bottom-0 w-1/3 opacity-5 pointer-events-none"
	src="/thinking-statue.png"
	alt="Thinking Statue"
/>
<Header />
<main transition:slide class="flex flex-col items-center p-2">
	<div class="w-full lg:w-2/3 xl:w-1/2">
		<slot />
	</div>
</main>
