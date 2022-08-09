<script>
	let savedRecipes = []; // empty if logged in?
</script>

<div>
	<h2>Saved Recipes</h2>
	<ul>
		{#each savedRecipes as recipe}
			<li>{recipe?.displayName}</li>
		{/each}
	</ul>
</div>
