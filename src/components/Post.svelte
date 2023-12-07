<script lang="ts">
	import type { Post } from '../types/post';

	export let post: Post;
</script>

<article class="rounded bg-slate-200 p-4">
	<h3 class="font-semibold mb-4">{post.title}</h3>
	<p>{post.body}</p>
</article>
