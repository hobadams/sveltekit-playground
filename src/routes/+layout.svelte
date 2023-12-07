<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<section>
		<slot />
		<ThemeSwitcher />
	</section>
</QueryClientProvider>
