<!-- src/routes/blog/[slug]/page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
  import Tag from '../../../components/Tag.svelte';
  import GSlides from '../../../components/GSlides.svelte';
  import Youtube from '../../../components/Youtube.svelte';

	export let data: PageData;
</script>

<div>
	<article>
		<header>
			<h1 class="text-4xl">{data.post.title}</h1>
			<p>{data.post.date}</p>
		</header>
		{#each data.post.tags as tag}
      <Tag name={tag}/>
		{/each}
    
    
    
		<!-- render the post -->
		<div class="text-left prose max-w-none w-full">

      {#if !Array.isArray(data.post.cover)}
      <img
        class="rounded object-contain w-full aspect-[9/5]"
        src={Array.isArray(data.post.cover) ? data.post.cover[0]: data.post.cover}
        alt=""
      />
      {:else if data.post.cover.reduce(
  (accumulator, currentValue) => 
  currentValue.includes("https://docs.google.com/presentation") ?
 true : accumulator,
  false)}
      <GSlides src={data.post.cover.reduce(
  (accumulator, currentValue) =>
  currentValue.includes("https://docs.google.com/presentation") ?
 currentValue : accumulator,
  false)} />
      {:else if data.post.cover.reduce(
  (accumulator, currentValue) =>
  currentValue.includes("https://www.youtube.com/embed/") ?
 true : accumulator,
  false)}
      <Youtube src={data.post.cover.reverse().reduce(
  (accumulator, currentValue) =>
  currentValue.includes("https://www.youtube.com/embed/") ?
 currentValue : accumulator,
  false)} />
      {/if}
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
    <br/>
	</article>
</div>

<style>
</style>
