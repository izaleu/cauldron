<script>
	const isProd = process.env.NODE_ENV !== 'development';
	const isSignedIn = false; // TODO: read from store
</script>

<div class="menu" class:isProd>
	<div class="logoLink">
        <a href="/"> {isProd ? 'Logo goes here' : 'cauldron (dev mode)'}</a>
    </div>
	<div class="navBar">
		<a class="navLink" href="/">Home</a>
		<a class="navLink" href="/schedule">Schedule</a>
		<a class="navLink" href="/recipes">Recipes</a>
		<a class="navLink" href="/login">{isSignedIn ? 'Sign Out' : 'Sign In'}</a>
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
