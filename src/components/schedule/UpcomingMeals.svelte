<script>
	let upcomingMeals = [];
</script>

<div>
	<h2>Your Next X Meals</h2>
	<a href="/schedule/create">Create a Meal Plan</a>
	<ul>
		{#each upcomingMeals as meal}
			<li>{meal?.displayName}</li>
		{/each}
	</ul>
</div>
