<script lang="ts">
	import PostsList from "../../components/PostsList.svelte";

	// your script goes here
	let newTitle = '';
	let newDetails = '';
  let postList: { title: string, details: string }[] = []

  function addToList() {
    console.log("=====", { newTitle, newDetails })
    postList = [...postList, { title: newTitle, details: newDetails }]
    newTitle = ""
    newDetails = ""
  }
</script>

<div class="flex w-full gap-8">
  <form class="w-1/2" on:submit|preventDefault={addToList}>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-post-title"
        >
          Post Title
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-post-title"
          type="text"
          placeholder="Enter your title..."
          bind:value={newTitle}
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-details"
        >
          Details
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-details"
          type="text"
          placeholder="Enter details"
          bind:value={newDetails}
        />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </form>

  <aside class="w-1/2 flex flex-col">
    <PostsList posts={postList} heading="Posts from component state"/>
    <div class="border-solid border-4 border-gray-600 mt-2 mb-3" />
    <PostsList posts={[]} heading="Posts from Svelte store"/>
  </aside>
</div>

<style>
	/* your styles go here */
</style>
