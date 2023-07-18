<!-- src/routes/blog/[slug]/page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<article>
		<header>
			<h1 class="text-4xl">{data.post.title}</h1>
			<!--<p>{data.post.date}</p>-->
		</header>
		<br />
		<!-- render the post -->
		<div class="text-left prose max-w-none">
			<svelte:component this={data.component} />
		</div>
	</article>
	<br />
</div>

<style>
</style>
