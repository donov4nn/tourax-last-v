<script>
	import "../app.postcss"
</script>

<nav>
	<ul>
		<li><a href="/calcul">calcul</a></li>
		<li><a href="/bobine">bobine</a></li>
		<li><a href="/historique">historique</a></li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style style lang="postcss">
	ul {
		@apply flex list-none w-full justify-center align-middle h-full;
	}
	a {
		@apply no-underline p-3 h-full block;
		color : inerhit;
	}
	main, nav, ul {
		@apply w-full;
	}
	main {
		@apply flex flex-row p-6;
		height : calc(100% - 3rem);
	}
	nav {
		@apply h-12;
	}
	li {
		@apply w-1/3 text-center text-blue-500 shadow-lg uppercase pt-1 h-full;
	}
</style>