<script>
	import "../app.postcss";
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
		@apply flex list-none w-full justify-center align-middle;
	}
	a {
		@apply no-underline text-black p-5;
	}
</style>