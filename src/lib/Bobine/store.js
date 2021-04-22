import {writable} from 'svelte/store'

export const bobines = writable(new Array(150).fill({
    idBobine: 0,
    reference: "ref",
    matiere: "",
    technique: "",
    poids: 0.0,
    poidsMaximum: 0.0,
    stock: 0,
    prix: 0.0,
    diametreExterieur: 0.0,
    diametreInterieur: 0.0,
    diametreTrouAxeCentral: 0.0,
    largeurInterieur: 0.0,
    largeurExterieur: 0.0,
    consigne: false,
    photoPath: null
}).map((bob, i) => {return {...bob, idBobine : i }}))