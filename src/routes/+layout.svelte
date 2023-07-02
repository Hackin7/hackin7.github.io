<script>
  import 'flowbite';
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />

<div class="text-center pt-10 content">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
