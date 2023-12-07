<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { z } from 'zod';

	const data = {
		firstName: '',
		lastName: '',
		email: ''
	};

	const { form, errors } = superForm(data);

	const handleSubmit = () => {
		console.log($form);
	};
</script>

<div class="mx-20 my-10">
	<SuperDebug data={$form} />
</div>
<div class="max-w-md mx-auto">
	<form
		on:submit|preventDefault={handleSubmit}
		class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
	>
		<div class="mb-4">
			<label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First name:</label>
			<input
				type="text"
				name="firstName"
				bind:value={$form.firstName}
				aria-invalid={$errors.firstName ? 'true' : undefined}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
			{#if $errors.firstName}<span class="invalid">{$errors.firstName}</span>{/if}
		</div>

		<div class="mb-4">
			<label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last name:</label>
			<input
				type="text"
				name="lastName"
				bind:value={$form.lastName}
				aria-invalid={$errors.lastName ? 'true' : undefined}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
			{#if $errors.lastName}<span class="invalid">{$errors.lastName}</span>{/if}
		</div>

		<div class="mb-4">
			<label for="email" class="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
			<input
				type="email"
				name="email"
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
		</div>

		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="submit">Submit</button
		>
	</form>
</div>
