<script>
	// auth
	import { googleSignIn } from '../../auth/googleAuth';
	import { logout } from '../../auth/firebase';
	import { user, isLoggedIn} from '../../stores/users';
</script>

<svelte:head>
	<title>Cauldron: Sign In</title>
</svelte:head>

<h1>Sign-in Page</h1>

<p>Sign in to save your schedule, favorite recipes, shopping list, etc.</p>
<p>Or don't. I'm not your boss.</p>

{#if $isLoggedIn}
	<p>Signed in as: {$user.displayName}</p>
	<button on:click={logout}>Sign Out</button>
{:else}
	<button on:click={googleSignIn}>Sign in with Google</button>
{/if}
