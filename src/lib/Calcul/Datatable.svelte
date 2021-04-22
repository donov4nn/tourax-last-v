<script>
    import { Datatable, rows } from 'svelte-simple-datatables'

    export let data = []

    export let settings = {
        sortable: true,
        pagination: true,
        scrollY: true,
        rowPerPage: 25,
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
</script>

<Datatable {settings} {data}>
    <thead>
        <th data-key="reference">Réference</th>
        <th data-key="nbSpires">Nbre spires</th>
        <th data-key="nbCouches">Nbre couches</th>
        <th data-key="lgMax">Lgr max</th>
        <th data-key="nbBobines">Nbre bobines</th>
        <th data-key="poidsTot">Poids total</th>
        <th></th>
    </thead>
    <tbody>
    {#each $rows as calcul}
        <tr>
            <td>{calcul.reference}</td>
            <td>{calcul.nombreDeSpires}</td>
            <td>{calcul.nombreDeCouches}</td>
            <td>{calcul.longueurTotalParBobine}</td>
            <td>{calcul.nombreDeBobines}</td>
            <td>{calcul.poidsTotal}</td>
            <td><button>btn 1</button></td>
        </tr>
    {/each}
    </tbody>
</Datatable>