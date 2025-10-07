<script lang="ts">
	import type { PageServerData } from './$types';
	import Tag, { tagCat, tagPriority, tagSort } from '../../components/Tag.svelte';
	export let data: PageServerData;
	let projects = data.projects.map((item, index, arr) => ({
		...item
	}));
	projects.sort((a, b) => {
		let getCat = (a) =>
			a.tags.reduce((accumulator, currentValue) => {
				let cat = tagCat(currentValue);
				if (tagPriority(accumulator, cat) > 0) {
					return cat;
				}
				return accumulator;
			});
		let catA = getCat(a);
		let catB = getCat(b);

		let sort1 = tagPriority(catA, catB);
		/*if (sort1==0){
      return b.tags.include("Deployed") - a.tags.include("Deployed") 
    }*/
		return sort1;
	});
</script>

<!-- https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit -->
<div class="text-left">
	<h1 class="text-3xl font-bold underline">Projects</h1>
	<br />
	<div>Some things I have done</div>
	<br />
	<table class="shadow-lg bg-white rounded-lg font-normal">
		<!--dark:bg-gray-800 dark:border-gray-700
      text-gray-700 dark:text-gray-200-->
		<tr class="font-bold">
			<td class="border px-3 py-2">Tag</td> <td class="border px-2 py-2">Meaning</td>
		</tr>
		<tr>
			<td class="border px-2 py-2"><Tag name="Deployed" /></td>
			<td class="border px-2 py-2">Used/ Being used by other people</td>
		</tr>
		<tr>
			<td class="border px-2 py-2 w-30"><Tag name="Award Winning" /></td>
			<td class="border px-2 py-2">Won an award (eg. Top 8 in a Hackathon)</td>
		</tr>
		<tr>
			<td class="border px-2 py-2"><Tag name="Highlight" /></td>
			<td class="border px-2 py-2"
				>Uses a concept not easily researched on/found (eg. Form automation on phone), or may be
				more technically challenging</td
			>
		</tr>
	</table>
	<br />
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each projects as project}
		<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
			<!--dark:bg-gray-800 dark:border-gray-700-->
			<a href={`projects/${project.slug}`}>
				<img
					class="rounded-t-lg object-cover w-full aspect-[9/5]"
					src={Array.isArray(project.cover)
						? project.cover.filter(
								(currValue, index, arr) => !currValue.includes('https://www.youtube.com/embed/')
						  )[0]
						: project.cover}
					alt=""
				/>
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						<!-- dark:text-white -->
						{project.title}
					</h5>
					{#each tagSort(project.tags).slice(0, 3) as tag}
						<Tag name={tag} />
					{/each}
					<p class="mb-3 font-normal text-gray-700">
						<!--dark:text-gray-400-->
						{project.description}
					</p>
				</div>
			</a>
		</div>
		<!--<a href={`projects/${project.link}`} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.name}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {project.description}
      </p>
  </a>-->
	{/each}
</div>

<br />
<br />
<br />
<!--
<ul class="text-left text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    {#each data.posts as post}
      <a href={`blog/${post.slug}`}>
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <span>{post.title}</span>
          <span class="text-right float-right">{post.date}</span>
        </li>
      </a>
    {/each}
</ul>
-->
