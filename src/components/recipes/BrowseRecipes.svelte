<script>
	import { getRecipes } from '../../api/api';
	let allRecipes = [];

	getRecipes().then(result => allRecipes = result);
</script>

<div>
	<h2>Browse Recipes</h2>
	<ul>
		{#each allRecipes as recipe}
			<li><a href={`/recipes/${recipe.id}`}>{recipe.displayName}</a></li>
		{/each}
	</ul>
</div>
