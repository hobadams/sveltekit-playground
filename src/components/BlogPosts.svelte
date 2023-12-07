<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { api } from '$lib/api';
	import Post from './BlogPost.svelte';
	import { derived, writable } from 'svelte/store';

	let limit = writable(10);

	const posts = createQuery<{ id: number; title: string; body: string; userId: number }[], Error>(
		derived(limit, ($limit) => ({
			queryKey: ['posts', $limit],
			queryFn: () => api().getPosts($limit)
		}))
	);
</script>

<div>
	<div>
		<label for="count">Post Count</label>
		<input id="count" bind:value={$limit} type="number" class="border" />
		{#if $posts.status === 'pending'}
			<span>Loading...</span>
		{:else if $posts.status === 'error'}
			<span>Error: {$posts.error.message}</span>
		{:else}
			<ul class="max-w-[500px]">
				{#each $posts.data as post}
					<li class="mb-4">
						<Post {post} />
					</li>
				{/each}
			</ul>
			{#if $posts.isFetching}
				<div style="color:darkgreen; font-weight:700">Background Updating...</div>
			{/if}
		{/if}
	</div>
</div>
