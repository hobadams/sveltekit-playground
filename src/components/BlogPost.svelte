<script lang="ts">
	import type { BlogPost } from '../types/blogPost';

	export let post: BlogPost;
</script>

<article class="rounded bg-slate-200 p-4">
	<h3 class="font-semibold mb-4">{post.title}</h3>
	<p>{post.body.substring(0, 50)}...</p>
	<a href={`/posts/${post.id}`} class="uppercase underline mt-4 font-semibold text-sm">View Post</a>
</article>
