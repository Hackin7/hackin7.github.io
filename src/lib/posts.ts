// src/lib/server/posts.ts

import { parse } from 'path';

type GlobEntry = {
	metadata: Post;
	default: unknown;
};

export interface Post {
	title: string;
	description: string;
	date: string;
	category: object;
}

// Get all posts and add metadata
export const posts = Object.entries(
	import.meta.glob('/src/content/blog-posts/*.md', { eager: true })
)
	.map(([filepath, globEntry]) => {
		return {
			...globEntry.metadata,
			globEntry: JSON.stringify(globEntry),
			// generate the slug from the file path
			slug: parse(filepath).name
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0
	}));
