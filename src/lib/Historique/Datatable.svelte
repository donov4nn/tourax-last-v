<script>
    import { Datatable, rows } from 'svelte-simple-datatables'
    import Icon from 'fa-svelte'
    import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf'
    import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

    export let settings = {
        sortable: true,
        pagination: true,
        scrollY: true,
        rowPerPage: 15,
        columnFilter: true,
        css: false,
        labels: {
            search: 'Recherche...',
            filter: 'Filtre',
            noRows: 'Aucune donnée trouvée',
            info: 'Affichage de {start} à {end} ({rows} lignes)',
            previous: 'Précedent',
            next: 'Suivant',
        },
        blocks: {
            searchInput: false,
            paginationButtons: true,
            paginationRowCount: true,
        }
    }

    export let historique = []

    function exportToPdf (calcul) {
        console.log("exportToPdf : ", calcul)
    }

    function deleteCalcul (calcul) {
        console.log("deleteCalcul : ", calcul)
    }
</script>

<Datatable {settings} bind:data={historique}>
    <thead>
        <th data-key="reference">Réference</th>
        <th data-key="nombreDeSpires">Nbre spires</th>
        <th data-key="nombreDeCouches">Nbre couches</th>
        <th data-key="longueurTotalParBobine">Lgr max</th>
        <th data-key="nombreDeBobines">Nbre bobines</th>
        <th data-key="poidsTotal">Poids total</th>
        <th></th>
        <th></th>
    </thead>
    <tbody>
    {#each $rows as calcul}
        <tr>
            <td>{calcul.bobine.reference}</td>
            <td>{calcul.nombreDeSpires}</td>
            <td>{calcul.nombreDeCouches}</td>
            <td>{calcul.longueurTotalParBobine}</td>
            <td>{calcul.nombreDeBobines}</td>
            <td>{calcul.poidsTotal}</td>
            <td><button on:click={() => exportToPdf(calcul)}><Icon icon={faFilePdf} /></button></td>
            <td class="trash"><button on:click={() => deleteCalcul(calcul.idCalcul)}><Icon icon={faTrash} /></button></td>
        </tr>
    {/each}
    </tbody>
</Datatable>