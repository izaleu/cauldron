<script>
	let upcomingMeals = [];
	let savedRecipes = []; // empty if logged in?
</script>

<svelte:head>
	<title>Cauldron Home</title>
</svelte:head>

<div>
	<h1>Welcome to Cauldron</h1>
	<p>An app to make meal-planning painless.</p>
	<div class="two-col">
		<div>
			<h2>Your Next X Meals</h2>
			<a href="/schedule">Create a Meal Plan</a>
			{#each upcomingMeals as meal}
				<li>{meal?.displayName}</li>
			{/each}
		</div>
		<div>
			<h2>Saved Recipes</h2>
			<ul>
				{#each savedRecipes as recipe}
					<li>{recipe?.displayName}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.two-col {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
