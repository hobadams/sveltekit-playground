<script lang="ts">
	export let title: string;
	export let details: string;
	export let handleSubmit: () => void;
</script>

<form class="w-1/2" on:submit|preventDefault={handleSubmit}>
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
				bind:value={title}
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
				bind:value={details}
			/>
		</div>
	</div>
	<div class="md:flex md:items-center">
		<div class="md:w-1/3"></div>
		<div class="md:w-2/3">
			<button class="btn variant-filled" type="submit"> Submit </button>
		</div>
	</div>
</form>
