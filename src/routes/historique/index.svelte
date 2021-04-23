<script>
    import {fade} from 'svelte/transition'
    import HistoriqueTable from '$lib/Historique/Datatable.svelte'
    import {historique} from '$lib/Historique/store.js'
</script>

<svelte:head>
	<title>Historique</title>
</svelte:head>

<div in:fade class="wrapper">
    <HistoriqueTable historique={$historique} />
</div>