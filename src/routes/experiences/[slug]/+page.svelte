<!-- src/routes/blog/[slug]/page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import Tag, { tagSort } from '../../../components/Tag.svelte';
	import GSlides from '../../../components/GSlides.svelte';
	import Youtube from '../../../components/Youtube.svelte';

	export let data: PageData;

	// Carousell Handling
	let curr = 0;
	function prev() {
		curr--;
		if (curr < 0) {
			curr = data.post.cover.length - 1;
		}
	}
	function next() {
		curr++;
		if (curr >= data.post.cover.length) {
			curr = 0;
		}
	}

	function special(a) {
		return (
			a.includes('https://docs.google.com/presentation') ||
			a.includes('https://www.youtube.com/embed/')
		);
	}
	let mediaContent = Array.isArray(data.post.cover) ? data.post.cover : [data.post.cover];
	mediaContent.sort((a, b) => {
		if (special(a) && special(b)) {
			return 0;
		} else if (special(a)) {
			return -1;
		} else {
			return 1;
		}
	});
</script>

<div>
	<article>
		<!--<div class="flex flex-row m-auto">
			<img class="rounded-t-lg object-contain w-24" src={data.post.logo}/>
			<div class="m-3"></div>-->
		<header class="">
			<h1 class="text-4xl">{data.post.title}</h1>
			<p>{data.post.start_date} to {data.post.end_date}</p>
			<div>
				{#each tagSort(data.post.tags) as tag}
					<Tag name={tag} />
				{/each}
			</div>
		</header>
		<!--</div>-->
		<br />

		<!-- render the post -->
		<div class="text-left prose max-w-none w-full">
			<div>
				<!--<div>
					{#if mediaContent[curr].includes('https://docs.google.com/presentation')}
						<GSlides src={mediaContent[curr]} />
					{:else if mediaContent[curr].includes('https://www.youtube.com/embed/')}
						<Youtube src={mediaContent[curr]} />
					{:else}
						<img
							data-carousel-item
							class="rounded object-contain w-full aspect-[9/5]"
							src={mediaContent[curr]}
							alt=""
						/>
					{/if}
				</div>-->

				{#if mediaContent.length > 1}
					<div class="w-full mt-1">
						<span class="float-right">
							<button type="button" class="" on:click={prev}>
								<span
									class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
								>
									<svg
										aria-hidden="true"
										class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										/></svg
									>
									<span class="sr-only">Previous</span>
								</span>
							</button>
							<button type="button" class="" on:click={next}>
								<span
									class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
								>
									<svg
										aria-hidden="true"
										class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/></svg
									>
									<span class="sr-only">Next</span>
								</span>
							</button>
						</span>
					</div>
				{/if}
			</div>

			<svelte:component this={data.component} />
		</div>

		<br />

		<!--<a
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
		</a>-->
		<br />
		<br />
	</article>
</div>

<style>
</style>
