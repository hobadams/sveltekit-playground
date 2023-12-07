import { api } from '$lib/api';
import type { PageLoad } from './$types';

// @see - https://kit.svelte.dev/docs/load
export const load: PageLoad = async ({ parent, fetch }) => {
	// From Layout
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['posts', 10],
		queryFn: () => api(fetch).getPosts(10)
	});
};
