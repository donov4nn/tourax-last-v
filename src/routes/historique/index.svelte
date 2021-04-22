<script>
    import {fade} from 'svelte/transition'
    import HistoriqueTable from '$lib/Historique/Datatable.svelte'
    import {historique} from '$lib/Historique/store.js'
</script>

<div in:fade class="wrapper">
    <HistoriqueTable historique={$historique} />
</div>