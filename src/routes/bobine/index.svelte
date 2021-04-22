<script>
    import {fade} from 'svelte/transition'
    import {bobines} from '$lib/Bobine/store.js'
    import BobineTable from '$lib/Bobine/Datatable.svelte'
</script>

<div in:fade class="wrapper">
    <button><a href="/bobine/new">Nouvelle bobine</a></button>
    <BobineTable bobines={$bobines} />
</div>