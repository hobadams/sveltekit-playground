<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { api } from '$lib/api';
	import BlogPost from './BlogPost.svelte';
	import { derived, writable } from 'svelte/store';

	let limit = writable(10);

	const posts = createQuery<{ id: number; title: string; body: string; userId: number }[], Error>(
		derived(limit, ($limit) => ({
			queryKey: ['posts', $limit],
			queryFn: () => api().getPosts($limit)
		}))
	);
</script>

<section class="max-w-[500px]">
	<div class="mb-4">
		<label for="count" class="block text-gray-700 text-sm font-bold mb-2">Blog Post Count</label>
		<input
			type="number"
			name="count"
			bind:value={$limit}
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		/>
	</div>
	{#if $posts.status === 'pending'}
		<span>Loading...</span>
	{:else if $posts.status === 'error'}
		<span>Error: {$posts.error.message}</span>
	{:else}
		<ul>
			{#each $posts.data as post}
				<li class="mb-4">
					<BlogPost {post} />
				</li>
			{/each}
		</ul>
		{#if $posts.isFetching}
			<div style="color:darkgreen; font-weight:700">Background Updating...</div>
		{/if}
	{/if}
</section>
