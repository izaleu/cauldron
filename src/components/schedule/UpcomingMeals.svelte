<script>
	import { isLoggedIn } from '../../stores/users';
	let upcomingMeals = [];
	if($isLoggedIn) {}//getSavedRecipes().then((recipes) => (savedRecipes = recipes));

</script>

<div>
	<h2>Your Next {upcomingMeals.length} Meals</h2>
	<a href="/schedule/create">Create a Meal Plan</a>
	<ul>
		{#each upcomingMeals as meal}
			<li>{meal?.displayName}</li>
		{/each}
	</ul>
</div>
