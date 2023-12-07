<script lang="ts">
	import { onMount } from 'svelte';
	import type { Post as PostType } from '$types/post';
	import Post from '$components/Post.svelte';

	let posts: PostType[] = [];
	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		posts = await res.json();
	});
</script>

<h2 class="font-bold text-lg">Posts</h2>
<ul class="max-w-[500px]">
	{#each posts as post}
		<li class="mb-4">
			<Post {post} />
		</li>
	{/each}
</ul>
