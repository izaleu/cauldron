<script>
	import Footer from '../components/Footer.svelte';
	import MenuBar from '../components/MenuBar.svelte';
</script>

<div class="layout">
	<MenuBar />
	<slot />
	<Footer />
</div>

<style>
	.layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
