<script>
    import {onMount} from 'svelte'
    import {goto} from '$app/navigation'
    onMount(() => goto('/calcul'))
</script>

<h1>Loading ...</h1>

<style style lang="postcss">
    h1 {
        @apply text-center text-red-600;
    }
</style>