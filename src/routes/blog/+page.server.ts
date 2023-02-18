
// src/routes/+page.server.ts
import { posts } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        posts, // make posts available on the client
    };
};
