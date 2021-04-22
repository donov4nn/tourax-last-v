import {derived} from 'svelte/store'
import {bobines} from '$lib/Bobine/store.js'
import {cable} from '$lib/Cable/store.js'

export const historique = derived([bobines, cable], ([$bobines, $cable]) => {
    return $bobines.map(bob => {
        return {
            bobine : bob,
            cable : $cable,
            idCalcul: bob.idBobine,
            idBobine: bob.idBobine,
            idCable: bob.idBobine,
            dateCalcul: new Date().toJSON(),
            nombreDeSpires: Math.ceil(Math.random().toFixed(2) * 10),
            nombreDeCouches: Math.ceil(Math.random().toFixed(2) * 10),
            longueurTotalParBobine: Math.ceil(Math.random().toFixed(2) * 10),
            nombreDeBobines: Math.ceil(Math.random().toFixed(2) * 10),
            poidsTotal: Math.ceil(Math.random().toFixed(2) * 10),
            poidsParBobine: 0,
            couches: []
        }
    })
})