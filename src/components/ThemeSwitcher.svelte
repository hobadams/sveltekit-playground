<script lang="ts">
	import { onMount } from 'svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	const setCookie = (value: string) => {
		const d = new Date();
		d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = 'darkTheme' + '=' + value + ';' + expires + ';path=/';
	};

	const getCookie = (): string | undefined => {
		let name = 'darkTheme' + '=';
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return undefined;
	};

	let cookie = undefined;
	let loaded = false;
	let darkTheme: boolean = false;

	let changeTheme = () => {
		darkTheme = !!darkTheme;

		console.log({ darkTheme });
		setCookie(darkTheme ? '1' : '0');
	};

	onMount(() => {
		cookie = getCookie();
		darkTheme = cookie && cookie === '1' ? true : false;
		loaded = true;
	});
</script>

{#if loaded}
	<SlideToggle name="theme" on:change={changeTheme} bind:checked={darkTheme}>
		{#if darkTheme}
			<p>Dark</p>
		{:else}
			<p>Light</p>
		{/if}</SlideToggle
	>
{/if}
