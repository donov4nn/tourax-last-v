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
        <th data-key="matiere">Matiere</th>
        <th data-key="poids">Poids</th>
        <th data-key="stock">Stock</th>
        <th data-key="prix">Prix</th>
        <th data-key="photoPath">PhotoPath</th>
        <th></th>
        <th></th>
    </thead>
    <tbody>
    {#each $rows as bobine}
        <tr>
            <td>{bobine.reference}</td>
            <td>{bobine.matiere}</td>
            <td>{bobine.poids}</td>
            <td>{bobine.stock}</td>
            <td>{bobine.prix}</td>
            <td>{bobine.photoPath}</td>
            <td><button>btn 1</button></td>
            <td><button>btn 2</button></td>
        </tr>
    {/each}
    </tbody>
</Datatable>