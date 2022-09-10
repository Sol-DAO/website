<script lang="ts">
	import Team from '$lib/constants/team';
</script>

<div class="flex flex-col items-center pt-10 px-1 lg:px-2 gap-5">
	<img src="/team-label.png" alt="Team Label" class=" w-1/4" />

	<hr class="p-1 mt-10 border-navbar border-t-2 w-full" />
</div>

<div class="flex justify-center md:justify-start flex-wrap py-2 px-1">
	{#each Team as teamMember}
		<div class="py-1 px-1 w-full md:w-1/3">
			<div
				class="flex items-center relative p-2 bg-navbar bg-opacity-50 rounded-xl border-navbar border-2"
			>
				{#if !teamMember.img}
					<img
						src="/defaultAvatar.png"
						class="opacity-50 w-16 h-16 rounded-xl self-start"
						alt="Chiuzon Avatar"
					/>
				{:else}
					<img
						src={teamMember.img}
						class="opacity-50 w-16 h-16 rounded-xl self-start"
						alt="Chiuzon Avatar"
					/>
				{/if}
				<div class="flex flex-col w-full justify-center">
					<h1 class="text-primary-1 text-xl f ont-semibold px-3">{teamMember.name}</h1>
					<p class="text-primary-1 text-xs font-light px-3">{teamMember.role}</p>

					<div class="flex justify-end pt-2">
						<a
							href="https://twitter.com/{teamMember.twitter}"
							class="p-2 text-xs text-primary-1 hover:text-opacity-75 active:text-opacity-20"
							>@{teamMember.twitter}</a
						>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
