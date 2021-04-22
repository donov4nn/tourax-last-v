import {derived} from 'svelte/store'
import {bobines} from '$lib/Bobine/store.js'
import {cable} from '$lib/Cable/store.js'

export const calculs = derived([bobines, cable], ([$bobines, $cable]) => {
    return $bobines.map(bob => {
        return {
            bobine : bob,
            cable : $cable,
            idCalcul: bob.idBobine,
            idBobine: bob.idBobine,
            idCable: bob.idBobine,
            dateCalcul: new Date().toJSON(),
            nombreDeSpires: $cable.diametre,
            nombreDeCouches: $cable.diametre,
            longueurTotalParBobine: $cable.diametre,
            nombreDeBobines: $cable.diametre,
            poidsTotal: $cable.diametre,
            poidsParBobine: 0,
            couches: []
        }
    })
})