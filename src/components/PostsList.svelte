<script lang="ts">
	import Post from "./Post.svelte";

  // your script goes here
  export let posts: { title: string, details: string }[]
  export let heading: string;
</script>

<div>
  <h1 class="mb-3">{heading}</h1>
  {#each posts as post}
     <Post title={post.title} details={post.details}/>
  {/each}

</div>

<style>
  /* your styles go here */
</style>
