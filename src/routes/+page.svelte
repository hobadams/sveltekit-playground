<script>
	import PostsList from "../components/PostsList.svelte";
  import { postsStore } from "$lib/stores/post-store";

</script>

<h1 class="font-medium">HOME</h1>
<PostsList heading="List on home page" posts={$postsStore} />
