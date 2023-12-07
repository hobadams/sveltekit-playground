<script lang="ts">
	import type { BlogPost } from '../types/blogPost';

	export let post: BlogPost;
</script>

<article class="rounded bg-surface-100-800-token p-4 shadow">
	<h3 class="font-semibold mb-4">{post.title}</h3>
	<p class="mb-4">{post.body.substring(0, 50)}...</p>
	<a
		href={`/posts/${post.id}`}
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		>View Post</a
	>
</article>
