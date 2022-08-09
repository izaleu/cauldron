<div>
	<h1>Admin-only</h1>
	<div class="admin-controls">
		<div class="control-area">
			<button class="control">Create Recipe</button>
		</div>
		<div class="control-area">
			<button class="control">Create Schedule</button>
		</div>

		<div class="control-area">
			<button class="control">Create Ingredient</button>
		</div>

		<div class="control-area">
			<button class="control">Create Shopping List</button>
		</div>
	</div>
</div>

<style>
	.admin-controls {
		display: grid;
		grid: 1fr 1fr / 1fr 1fr;
		gap: 24px;
	}
	.control-area {
		height: 200px;
	}
</style>
