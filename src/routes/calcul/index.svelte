<script>
    import {fade} from 'svelte/transition'
    import CableForm from '$lib/Cable/Form.svelte'
    import CalculTable from '$lib/Calcul/Datatable.svelte'
    import {cable} from '$lib/Cable/store.js'
    import {calculs} from '$lib/Calcul/store.js'
</script>

<div in:fade class="wrapper">
    <CableForm bind:cable={$cable} />
    <CalculTable calculs={$calculs} />
</div>