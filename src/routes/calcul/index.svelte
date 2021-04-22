<script context="module">
    export async function load ({fetch}) {
        const url = 'https://localhost:4000/api/bobine'
        const resp = await fetch(url)

        if (resp.ok) {
            return {
                props : {
                    bobinesProps : await resp.json()
                }
            }
        }
    }
</script>

<script>
    import CableForm from '$lib/Cable/Form.svelte'
    import CalculTable from '$lib/Calcul/Datatable.svelte'
    import {cable} from '$lib/Cable/store.js'
    import {calculs} from '$lib/Calcul/store.js'
    import {bobines} from '$lib/Bobine/store.js'
    import {onMount} from 'svelte';

    export let bobinesProps

    onMount(() => {
        if (bobinesProps) $bobines = bobinesProps
    })
</script>

<CableForm cable={$cable} />
<CalculTable {$calculs} />