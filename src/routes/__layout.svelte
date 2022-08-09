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
		display: grid;
		grid: 24px calc(100vh - 48px) 24px/ auto;
	}
</style>
