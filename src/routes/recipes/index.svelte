<script>
	import BrowseRecipes from '../../components/recipes/BrowseRecipes.svelte';
	import SavedRecipes from '../../components/recipes/SavedRecipes.svelte';
</script>

<svelte:head>
	<title>Cauldron: Recipes</title>
</svelte:head>

<h1>Recipes</h1>
<div class="two-col">
	<BrowseRecipes />
  <SavedRecipes />
</div>

<style>
	.two-col {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
