<script lang="ts">
	import PostsList from '../../components/PostsList.svelte';
	import { postsStore } from '$lib/stores/post-store';
	import CreatePostForm from '../../components/CreatePostForm.svelte';

	// your script goes here
	let newTitle = '';
	let newDetails = '';
	let postList: { title: string; details: string }[] = [];

	function addToList() {
		postList = [...postList, { title: newTitle, details: newDetails }];
		postsStore.addNewPost(newTitle, newDetails);
		newTitle = '';
		newDetails = '';
	}
</script>

<div class="flex w-full gap-8">
	<a href="/" class="text-sky-400">Home</a>
	<CreatePostForm bind:title={newTitle} bind:details={newDetails} handleSubmit={addToList} />

	<aside class="w-1/2 flex flex-col">
		<!-- rendering from app state -->
		<PostsList posts={postList} heading="Posts from component state" />
		<div class="border-solid border-4 border-gray-600 mt-2 mb-3" />
		<!-- rendering from store -->
		<PostsList posts={$postsStore} heading="Posts from Svelte store" />
	</aside>
</div>

<style>
	/* your styles go here */
</style>
