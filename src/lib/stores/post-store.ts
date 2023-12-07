import { writable } from 'svelte/store';

type PostType = {
	title: string;
	details: string;
};

const INITIAL_POSTS: PostType[] = [];

const createPostsStore = () => {
	const { subscribe, update } = writable(INITIAL_POSTS);

	const addNewPost = (postTitle: string, postDetails: string) => {
		const newPost: PostType = { title: postTitle, details: postDetails };

		update((posts) => {
			posts = [...posts, newPost];
			return posts;
		});
	};

	return {
		addNewPost,
		subscribe
	};
};

export const postsStore = createPostsStore();
