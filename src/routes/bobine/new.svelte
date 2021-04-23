<script>
    import {bobine, defaultBobine} from '$lib/Bobine/store.js'
    import { onMount } from 'svelte';

    function handleSubmit() {
        console.log("création bobine : ", $bobine)
    }

    onMount(() => $bobine = $defaultBobine)
</script>

<h1>Création bobine</h1>
<form on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="reference">Réference</label>
        <input type="text" bind:value={$bobine.reference} id="reference" placeholder="Réference">
    </div>
    <div>
        <label for="matiere">Matière</label>
        <input placeholder="Matière" type="text" bind:value={$bobine.matiere} id="matiere">
    </div>
    <div>
        <label for="technique">Technique</label>
        <input placeholder="Technique" type="text" bind:value={$bobine.technique} id="technique">
    </div>
    <div>
        <label for="poids">Poids</label>
        <input placeholder="Poids" type="text" bind:value={$bobine.poids} id="poids">
    </div>
    <div>
        <label for="poidsMaximum">Poids maximum</label>
        <input placeholder="Poids maximum" type="text" bind:value={$bobine.poidsMaximum} id="poidsMaximum">
    </div>
    <div>
        <label for="prix">Prix</label>
        <input placeholder="Prix" type="text" bind:value={$bobine.prix} id="prix">
    </div>
    <div>
        <label for="stock">Stock</label>
        <input placeholder="Stock" type="text" bind:value={$bobine.stock} id="stock">
    </div>
    <div>
        <label for="diametreExterieur">Diametre extérieur</label>
        <input placeholder="Diametre extérieur" type="text" bind:value={$bobine.diametreExterieur} id="diametreExterieur">
    </div>
    <div>
        <label for="diametreInterieur">Diametre intérieur</label>
        <input placeholder="Diametre intérieur" type="text" bind:value={$bobine.diametreInterieur} id="diametreInterieur">
    </div>
    <div>
        <label for="diametreTrouAxeCentral">Diametre trou axe central</label>
        <input placeholder="Diametre trou axe central" type="text" bind:value={$bobine.diametreTrouAxeCentral} id="diametreTrouAxeCentral">
    </div>
    <div>
        <label for="largeurInterieur">Largeur intérieur</label>
        <input placeholder="Largeur intérieur" type="text" bind:value={$bobine.largeurInterieur} id="largeurInterieur">
    </div>
    <div>
        <label for="largeurExterieur">Largeur extérieur</label>
        <input placeholder="Largeur extérieur" type="text" bind:value={$bobine.largeurExterieur} id="largeurExterieur">
    </div>
    <div>
        <label for="consigne">Consigne</label>
        <input placeholder="Consigne" type="text" bind:value={$bobine.consigne} id="consigne">
    </div>
    <div>
        <label for="photoPath">Photo</label>
        <input placeholder="Photo" type="text" bind:value={$bobine.photoPath} id="photoPath">
    </div>
    <button type="submit">Création</button>
</form>

<style style lang="postcss">

</style>