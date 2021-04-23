<script>
    export let cable
</script>

<form>
    <div>
        <label for="diametre">Diamètre</label>
        <input placeholder="Diamètre" type="text" bind:value={cable.diametre}>
    </div>
</form>