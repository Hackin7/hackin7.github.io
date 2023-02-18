<script lang="ts">
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    console.log(data)
</script>

<!-- https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit -->
<h1 class="text-3xl font-bold underline">
  Blog
</h1>
<br/>
<div class="text-left">
  Work in Progress
</div>
<ul class="links">
    {#each data.posts as post}
    <li>
        <a href={`blog/${post.slug}`}>{post.title}</a>
    </li>
    {/each}
</ul>
