import type { BlogPost } from '$types/blogPost';

export const api = (customFetch = fetch) => ({
	getPosts: async (limit: number) => {
		const response = await customFetch('https://jsonplaceholder.typicode.com/posts');
		const data = (await response.json()) as BlogPost[];
		return data.filter((x) => x.id <= limit);
	},
	getPostById: async (id: number): Promise<BlogPost> => {
		const response = await customFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const data = (await response.json()) as BlogPost;
		return data;
	}
});
