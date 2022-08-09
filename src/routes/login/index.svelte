<script>
	// auth
	import { checkSignIn, getCurrentUser } from '../../firebase';
	import { googleSignIn, googleSignOut } from '../../googleAuth';

	function updateLogin() {
		checkSignIn().then((result) => {
			isSignedIn = result; // TODO: update store
		});
	}

	async function tryLogin() {
		googleSignIn().then(() => updateLogin());
	}

	async function logout() {
		googleSignOut().then(() => updateLogin());
	}

	let isSignedIn = !!getCurrentUser();

	updateLogin();
</script>

<svelte:head>
  <title>Cauldron: Sign In</title>
</svelte:head>

<h1>Sign-in Page</h1>

<p>Sign in to save your schedule, favorite recipes, shopping list, etc.</p>
<p>Or don't. I'm not your boss.</p>

{#if isSignedIn}
    <p>Signed in as: {getCurrentUser().displayName}</p>
    <button on:click={logout}>Sign Out</button>
{:else}
    <button on:click={tryLogin}>Sign in with Google</button>
{/if}