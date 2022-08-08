<script>
	// auth
	import { checkSignIn, getCurrentUser, getFirestoreDB, makeFirebaseApp } from '../firebase';
    import { getRecipes,initApi } from '../api/api';

    // init
	const app = makeFirebaseApp();
    initApi(getFirestoreDB(app));

    // auth
	import { googleSignIn, googleSignOut } from '../googleAuth';

    function updateLogin() {
        checkSignIn().then((result) => {
            isLoggedIn = result;
        });
    }

    async function tryLogin() {
        googleSignIn().then(() => updateLogin());
    }

    async function logout() {
        googleSignOut().then(() => updateLogin());
    }

	let isLoggedIn = !!getCurrentUser();

    updateLogin();

    // API call
//    let recipeList = [];
  //  recipeList = getRecipes();

</script>

<h1>Welcome to Cauldron</h1>
<button on:click={getRecipes}>Get Recipes</button>

{#if isLoggedIn}
	<p>Logged in as: {getCurrentUser().displayName}</p>
	<button on:click={logout}>Log Out</button>
{:else}
	<button on:click={tryLogin}>Log In</button>
{/if}

<h2>Recipe list</h2>
<ul>
    {#await getRecipes()}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
    {:then recipeList}
        <!-- promise was fulfilled -->
        {#each recipeList as recipe}
		    <li>
                <h3>{recipe.displayName}</h3>
                <p>Ingredients: {recipe.ingredients.length}</p>
            </li>
	    {/each}
    {:catch error}
        <!-- promise was rejected -->
        <p>Something went wrong: {error.message}</p>
    {/await}
</ul>
