<script>
	import SvelteLogo from '$lib/assets/svelte-logo.svg';
</script>

<header>
	<nav
		class="flex flex-grow text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 justify-between px-6 py-4 bg-surface-100-800-token"
	>
		<a href="/"><img src={SvelteLogo} alt="Logo" class="h-8 w-8"/></a>

		<ul class="flex list-none space-x-8">
			<li>
				<a href="/posts" class="text-gray-800 hover:text-blue-400">Posts</a>
			</li>
			<li>
				<a href="/blog" class="text-gray-800 hover:text-blue-400">Blog</a>
			</li>
			<li>
				<a href="/contact" class="text-gray-800 hover:text-blue-400">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* your styles go here */
</style>
