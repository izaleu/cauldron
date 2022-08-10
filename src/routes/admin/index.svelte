<script>
	import { addIngredient } from '../../api/api';
	let disableAdd = false;
	async function tryAdd(displayName, tags){
		disableAdd = true;
		addIngredient('Shoyu', ['soy']).then(()=>{
		}).catch(error => {
			console.error('Failed to create ingredient:', error);
		}).finally(()=> {
			disableAdd = false;
		});
	}
</script>
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
			<button on:click={tryAdd} disabled={disableAdd} class="control">Create Ingredient</button>
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
