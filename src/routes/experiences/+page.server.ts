// src/routes/+page.server.ts
import { experiences } from '$lib/markdown_content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	let components = [];
	for (let i in experiences) {
		let item = experiences[i];
		let filepath = '../../..' + item.filepath;
		//filepath = "../../../src/content/experiences/education/cchy.md";
		//let component = await import(filepath).default;
		//console.log(component);
		//components.push(component);
	}
	console.log(experiences);
	let output = {
		experiences: experiences.map((item, index, arr) => ({
			...item,
		//	component: components[index]
		}))
		// make posts available on the client
	};
	console.log(output);
	return output;
};
