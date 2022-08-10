<script>
	import BrowseRecipes from '../components/recipes/BrowseRecipes.svelte';
	import SavedRecipes from '../components/recipes/SavedRecipes.svelte';
	import UpcomingMeals from '../components/schedule/UpcomingMeals.svelte';
	import { isLoggedIn } from '../stores/users';
</script>

<svelte:head>
	<title>Cauldron Home</title>
</svelte:head>

<div>
	<h1>Welcome to Cauldron</h1>
	<p>An app to make meal-planning painless.</p>
	<div class="two-col">
		{#if $isLoggedIn === true}
			<UpcomingMeals />
		{:else}
			<BrowseRecipes />
		{/if}
		<SavedRecipes />
	</div>
</div>

<style>
	.two-col {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
