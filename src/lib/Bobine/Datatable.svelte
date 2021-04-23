<script>
    import { Datatable, rows } from 'svelte-simple-datatables'
    import Icon from 'fa-svelte'
    import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle'
    import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
    import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

    export let settings = {
        sortable: true,
        pagination: true,
        scrollY: true,
        rowPerPage: 15,
        columnFilter: true,
        css: true,
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

    export let bobines = []

    function deleteBobine (idBobine) {
        bobines = bobines.filter(bob => bob.idBobine !== idBobine)
    }
</script>

<Datatable {settings} bind:data={bobines}>
    <thead>
        <th data-key="reference">Réference</th>
        <!-- <th data-key="matiere">Matiere</th> -->
        <th data-key="poids">Poids</th>
        <th data-key="stock">Stock</th>
        <th data-key="prix">Prix</th>
        <!-- <th></th> -->
        <th></th>
        <th></th>
        <th></th>
    </thead>
    <tbody>
    {#each $rows as bobine}
        <tr>
            <td>{bobine.reference}</td>
            <!-- <td>{bobine.matiere}</td> -->
            <td>{bobine.poids}</td>
            <td>{bobine.stock}</td>
            <td>{bobine.prix}</td>
             <!-- <td><img src={bobine.photoPath} alt={bobine.reference} /></td> -->
            <td><button><a href={`/bobine/simulate/${bobine.idBobine}`}><Icon icon={faPlayCircle} /></a></button></td>
            <td><button><a href={`/bobine/edit/${bobine.idBobine}`}><Icon icon={faEdit} /></a></button></td>
            <td class="trash"><button on:click={() => deleteBobine(bobine.idBobine)}><Icon icon={faTrash} /></button></td>
        </tr>
    {/each}
    </tbody>
</Datatable>

<style style lang="postcss">
    img {
        @apply m-auto;
        max-width: 2rem;
    }

    a {
        @apply p-0;
        display : unset;
    }
</style>