import {writable} from 'svelte/store'

export const cable = writable({
    idCable: 0,
    diametre: "",
    type: null,
    poids: 0.0,
    coefficiantCorrection: 0.0,
    longueur: 0.0
})