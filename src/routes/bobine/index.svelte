<script>
    import {fade} from 'svelte/transition'
    import {bobines} from '$lib/Bobine/store.js'
    import BobineTable from '$lib/Bobine/Datatable.svelte'
</script>

<div in:fade class="wrapper">
    <BobineTable bobines={$bobines} />
</div>

<style style lang="postcss">
    button {
        @apply ml-auto mr-auto;
    }
</style>