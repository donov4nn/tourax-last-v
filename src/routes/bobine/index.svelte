<script>
    import {fade} from 'svelte/transition'
    import {bobines} from '$lib/Bobine/store.js'
    import BobineTable from '$lib/Bobine/Datatable.svelte'
</script>

<svelte:head>
	<title>Bobine</title>
</svelte:head>

<div in:fade class="wrapper">
    <button><a href="/bobine/new">Nouvelle bobine</a></button>
    <BobineTable bind:bobines={$bobines} />
</div>

<style style lang="postcss">
    button {
        @apply ml-auto mr-auto;
    }
</style>