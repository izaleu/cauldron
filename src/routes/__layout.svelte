<script>
	// auth
	import { getFirestoreDB, makeFirebaseApp } from '../firebase';
	import { initApi } from '../api/api';

	// init
	const app = makeFirebaseApp();
	initApi(getFirestoreDB(app));

	import Footer from '../components/Footer.svelte';
	import MenuBar from '../components/MenuBar.svelte';
</script>

<div class="layout">
	<MenuBar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
