// src/routes/+page.server.ts
import { projects } from '$lib/markdown_content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		projects // make posts available on the client
	};
};
