<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<!-- https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit -->
<div class="text-left">
	<h1 class="text-3xl font-bold underline">Blog</h1>
	
	<p>A list of my blog posts</p>
	
</div>
<ul
	class="list-none text-left text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
	{#each data.posts as post}
		<a href={`blog/${post.slug}`}>
			<li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
				<span>{post.title}</span>
				<span class="text-right float-right">{post.date}</span>
			</li>
		</a>
	{/each}
</ul>
