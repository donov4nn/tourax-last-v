<script>
    export let cable
</script>

<form>
    <div>
        <label for="diametre">Diamètre</label>
        <input type="text" bind:value={cable.diametre}>
    </div>
</form>