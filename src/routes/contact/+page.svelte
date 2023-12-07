<script lang="ts">
	import { api } from '$lib/api';
	import { createQuery } from '@tanstack/svelte-query';
	import { superForm, superValidateSync } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { z } from 'zod';

	const formSchema = z.object({
		subject: z.string().min(1),
		firstName: z.string().min(1),
		lastName: z.string().min(1),
		email: z.string().email().min(1)
	});

	const formData = superValidateSync(formSchema);
	const { form, errors, enhance } = superForm(formData, {
		validators: formSchema
	});

	const handleSubmit = async () => {
		console.log($form);
	};

	let limit = 10;

	const query = createQuery<{ id: number; title: string; body: string; userId: number }[], Error>({
		queryKey: ['posts', limit],
		queryFn: () => api().getPosts(limit)
	});
</script>

{#if $query.isSuccess}
	<div class="max-w-md">
		<form
			method="POST"
			use:enhance
			on:submit|preventDefault={handleSubmit}
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
		>
			<div class="mb-4">
				<label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
				<select
					name="subject"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					bind:value={$form.subject}
				>
					<option value="">Please Select</option>
					{#each $query.data as subject}
						<option value={subject.title}>
							{subject.title}
						</option>
					{/each}
				</select>
				{#if $errors.subject}<span class="text-red">Subject is not valid</span>{/if}
			</div>
			<div class="mb-4">
				<label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First name:</label
				>
				<input
					type="text"
					name="firstName"
					bind:value={$form.firstName}
					aria-invalid={$errors.firstName ? 'true' : undefined}
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{#if $errors.firstName}<span class="text-red">First name is not valid</span>{/if}
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
				{#if $errors.lastName}<span class="text-red">Last name is not valid</span>{/if}
			</div>

			<div class="mb-4">
				<label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
				<input
					type="email"
					name="email"
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{#if $errors.email}<span class="text-red">Email is not valid</span>{/if}
			</div>

			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit">Submit</button
			>
		</form>
	</div>

	<div class="mx-20 my-10">
		<SuperDebug data={$form} />
	</div>
{/if}
