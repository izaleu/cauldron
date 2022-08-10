<script>
	import { isLoggedIn } from '../../stores/users';

	export let ingredients = [],
		displayName = '',
		instructions = [],
		tags = [],
		serves = 1;

	let servingAdjustment = 1;

	function adjustServing(amount) {
		servingAdjustment += amount/serves;
		servingAdjustment = Math.max(servingAdjustment, 1);
	}
</script>

<div class="returnLink">
	<a href="/recipes">{'<<< Go Back'}</a>
</div>

<h1>
	{displayName}
	{#if $isLoggedIn}
		<button>Add to Saved</button>
		<button>Add to Schedule</button>
	{/if}
</h1>
<!-- tag list-->
<p>
	{#each tags as tag}
		<small class="tag">{tag}</small>
	{/each}
</p>
<!-- end tags -->
<!-- portions -->
<div class="portions">
	<p>Serves: {serves * servingAdjustment}</p>
	<button on:click={() => adjustServing(1)}>Add serving</button>
	<button on:click={() => adjustServing(-1)} disabled={serves <= 1}>Subtract a serving</button>
</div>
<!-- end portions -->
<div>
	<h2>Ingredients</h2>
	<ul>
		{#each ingredients as ingredient}
			<li>
				<div>
					{ingredient.quantity * servingAdjustment}
					{ingredient.measure}
					{ingredient?.ingredient?.displayName}
				</div>
			</li>
		{/each}
	</ul>
</div>
<div>
	<h2>Instructions</h2>
	<ol>
		{#each instructions as instruction}
			<li>{instruction}</li>
		{/each}
	</ol>
</div>

<style>
	.tag {
		border-radius: 10px;
		background-color: lightgray;
		padding: 6px;
		margin-right: 4px;
	}
	.portions {
		display: flex;
		justify-content: space-between;
		max-width: 25%;
		max-height: 24px;
		align-items: center;
	}
	.returnLink {
		margin-top: 12px;
	}
</style>
