import {writable} from 'svelte/store'

export const bobines = writable(new Array(150).fill({
    idBobine: "",
    reference: "",
    matiere: "",
    technique: "",
    poids: "",
    poidsMaximum: "",
    stock: "",
    prix: "",
    diametreExterieur: "",
    diametreInterieur: "",
    diametreTrouAxeCentral: "",
    largeurInterieur: "",
    largeurExterieur: "",
    consigne: "",
    photoPath: ""
}).map((bob, i) => {return {...bob, idBobine : i }}))

export const bobine = writable({
    idBobine: "",
    reference: "",
    matiere: "",
    technique: "",
    poids: "",
    poidsMaximum: "",
    stock: "",
    prix: "",
    diametreExterieur: "",
    diametreInterieur: "",
    diametreTrouAxeCentral: "",
    largeurInterieur: "",
    largeurExterieur: "",
    consigne: "",
    photoPath: ""
})

export const defaultBobine = writable({
    idBobine: "",
    reference: "",
    matiere: "",
    technique: "",
    poids: "",
    poidsMaximum: "",
    stock: "",
    prix: "",
    diametreExterieur: "",
    diametreInterieur: "",
    diametreTrouAxeCentral: "",
    largeurInterieur: "",
    largeurExterieur: "",
    consigne: "",
    photoPath: ""
})