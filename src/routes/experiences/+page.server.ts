// src/routes/+page.server.ts
import { experiences } from '$lib/markdown_content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		experiences // make posts available on the client
	};
};
