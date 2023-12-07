<script>
	import Input from './Input.svelte';
	import Button from './Button.svelte';
	import Modal from './Modal.svelte';
</script>

<form>
	<Input />
	<Button />
	<Modal>
		<h1 slot="header">header</h1>
		<p>this is body content</p>
		<footer slot="footer">footer</footer>
	</Modal>
</form>
