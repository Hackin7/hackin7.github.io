<!-- src/routes/blog/[slug]/page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<article>
		<header>
			<h1 class="text-4xl">{data.post.title}</h1>
			<p>{data.post.date}</p>
		</header>
		<br />
		{#each project.tags as tag}
			<div
				class="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-amber-300 text-gray-800 rounded-full my-1 capitalize mr-1"
			>
				{tag}
			</div>
		{/each}
		<!-- render the post -->
		<div class="text-left">
			<svelte:component this={data.component} />
		</div>

		<a
			href={`${data.post.link}`}
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Check it out!
			<svg
				aria-hidden="true"
				class="w-4 h-4 ml-2 -mr-1"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</a>
	</article>
</div>

<style>
</style>
