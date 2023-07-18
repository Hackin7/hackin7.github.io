<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import type { PageServerData } from './$types';
	import Tag, { tagCat, tagPriority, tagSort } from '../../components/Tag.svelte';
	import ExpandContent from '../../components/ExpandContent.svelte';
	export let data: PageServerData;
	/*let content = null;                                                       import("../../../src/content/experiences/education/cchy.md").then((x)=>{                                                                                        content= x.default;                                                 });*/ 
	let experiences = data.experiences;
	let prep = async () => {
		let components = [];
		for (let i in data.experiences) {
			let item = data.experiences[i];
			let filepath = '../../..' + item.filepath;
			let component = await import(`../../content/experiences/${item.slug}.md`); //filepath);
			console.log(component);
			components.push(component.default);
		}
		experiences = data.experiences.map((item, index, arr) => ({
			...item,
			component: components[index]
		}));
	};
	prep();
</script>

{#each ['work', 'education', 'volunteer'] as type}
<h1 class="text-3xl text-left font-bold underline capitalize">{type}</h1>
<div class="text-left prose max-w-none">
	{#each experiences.filter(x => x.type == type).map((x,i)=>({...x, index: i})) as experience}
		{#if experience.index != 0}
			<hr>
		{/if} 
		<div class="md:flex md:flex-row">
			<div class="md:mr-5 md:w-24">
				<img class="rounded-t-lg object-contain w-24" src={experience.logo} alt="" />
				<span>{experience.start_date} to {experience.end_date}</span>
			</div>
			<ExpandContent height='30vh' redirect={`/experiences/${experience.slug}`}><!--<div class="overflow-hidden" style="max-height:33vh;">-->
				<h2>{experience.title}</h2>
				<svelte:component  this={experience.component} />
			</ExpandContent>
		</div>
	{/each}
</div>
<br><br>
{/each}
