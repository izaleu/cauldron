<script>
	import DetailView from '../../../components/recipes/DetailView.svelte';
	import { page } from '$app/stores';
	import { getRecipe } from '../../../api/api';

    let recipe = {};
    getRecipe($page.params.recipe).then(result => recipe = result);
</script>

<svelte:head>
	<title>{recipe?.displayName}</title>
</svelte:head>

<DetailView {...recipe} />
