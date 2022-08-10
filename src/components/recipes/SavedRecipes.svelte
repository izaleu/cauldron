<script>
	import { isLoggedIn } from '../../stores/users';
	import { getSavedRecipes } from '../../api/api';
	
	let savedRecipes = []; // empty if logged in?
	if($isLoggedIn) getSavedRecipes().then((recipes) => (savedRecipes = recipes));
</script>

<div>
	<h2>My Saved Recipes</h2>
	{#if $isLoggedIn}
		<ul>
			{#each savedRecipes as recipe}
				<li>{recipe?.displayName}</li>
			{/each}
		</ul>
	{:else}
		<p><a href="/login">Sign in</a> to save your favorite recipes</p>
	{/if}
</div>
