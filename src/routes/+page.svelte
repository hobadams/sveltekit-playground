<script>
	import PostsList from '../components/PostsList.svelte';
	import { postsStore } from '$lib/stores/post-store';
</script>

<h1 class="font-medium">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<PostsList heading="List on home page" posts={$postsStore} />
