<script>
	import { isLoggedIn } from '../stores/users';
	import { getCurrentUser } from '../api/api';
	import { user as userStore } from '../stores/users';

	const isProd = process.env.NODE_ENV !== 'development';

	let userRole;

	userStore.subscribe(() => getCurrentUser().then(result => {
		userRole = result?.role;
	}));
	// subscribe to user store update?
	
</script>

<div class="menu" class:isProd>
	<div class="logoLink">
		<a href="/"> {isProd ? 'Logo goes here' : 'cauldron (dev mode)'}</a>
	</div>
	<div class="navBar">
		<a class="navLink" href="/">Home</a>
		<a class="navLink" href="/schedule">Schedule</a>
		<a class="navLink" href="/recipes">Recipes</a>
		{#if userRole === 'admin'}
		<a class="navLink" href="/admin">Admin</a>
		{/if}
		{#if $isLoggedIn}
			<a class="navLink" href="/logout">Log Out</a>
		{:else}
			<a class="navLink" href="/login">Log In</a>
		{/if}
	</div>
</div>

<style>
	.menu {
		display: grid;
		grid: auto / repeat(8, 1fr);
	}
	.navBar {
		grid-column: 5 / 9;
		justify-self: end;
	}
	.isProd {
		color: red;
	}
	.navLink {
	}
	.logoLink {
	}
</style>
