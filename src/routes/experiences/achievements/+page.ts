// src/routes/blog/[slug]/page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug
	const component = await import(`../../../content/achievements.md`);

	return {
		post: {title: 'Achievements'}, // data.post,
		component: component.default,
		layout: {
			fullWidth: true
		}
	};
};
