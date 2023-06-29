// src/lib/server/posts.ts
import { parse } from 'path';

// Get all posts and add metadata
export const projects = Object.entries(
	import.meta.glob<GlobEntry>('/src/content/projects/*.md', { eager: true })
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