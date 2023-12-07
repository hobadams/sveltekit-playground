<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost as BlogPostType } from '$types/blogPost';
	import BlogPost from '$components/BlogPost.svelte';

	let posts: BlogPostType[] = [];
	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		posts = await res.json();
	});
</script>

<h2 class="font-bold text-lg">Posts</h2>
<ul class="max-w-[500px]">
	{#each posts as post}
		<li class="mb-4">
			<BlogPost {post} />
		</li>
	{/each}
</ul>
