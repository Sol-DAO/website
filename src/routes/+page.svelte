<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
</script>

<div class="flex flex-col py-20 px-1 lg:px-28 gap-5">
	<!-- <h1 class=" text-center align-middle text-white text-4xl font-semibold tracking-wide leading-10">
		Degenerate High Frequency Trading
	</h1> -->
	<img src="landing-text.png" alt="Substitle" />

	<!-- <h2 class=" text-center align-middle text-white text-3xl font-semibold tracking-wide leading-10">
		...
	</h2> -->
</div>

<Seo title={'Home'} />

<div class="flex flex-col">
	<div class=" bg-navbar bg-opacity-50 p-2 rounded-xl border-navbar border-2">
		<!-- <img src="/trade-label.png" /> -->
		<p class="py-1 px-3 text-primary-1">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ratione nihil laudantium quo
			deleniti hic delectus optio, debitis ut. Necessitatibus, sint reiciendis. Ea quae rerum eum
			voluptate ullam doloribus numquam.
		</p>

		<div class="w-full flex justify-end">
			<button
				class="p-2 text-sm lg:text-base text-primary-1 bg-navbar bg-opacity-60 hover:bg-opacity-95 active:bg-opacity-50 border-navbar border-2 rounded-xl"
				>Learn More</button
			>
		</div>
	</div>
</div>
