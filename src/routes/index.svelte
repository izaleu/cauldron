<script>
	import BrowseRecipes from '../components/recipes/BrowseRecipes.svelte';
	import SavedRecipes from '../components/recipes/SavedRecipes.svelte';
	import UpcomingMeals from '../components/schedule/UpcomingMeals.svelte';

	let isSignedIn = false; // TODO: get from store
</script>

<svelte:head>
	<title>Cauldron Home</title>
</svelte:head>

<div>
	<h1>Welcome to Cauldron</h1>
	<p>An app to make meal-planning painless.</p>
	<div class="two-col">
		{#if isSignedIn === true}
			<UpcomingMeals />
			<SavedRecipes />
		{:else}
			<BrowseRecipes />
		{/if}
	</div>
</div>

<style>
	.two-col {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
