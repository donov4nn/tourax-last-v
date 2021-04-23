import {writable} from 'svelte/store'

export const bobines = writable(new Array(150).fill({
    idBobine: "",
    reference: "LB" + Math.ceil(Math.random().toFixed(2) * 10),
    matiere: "",
    technique: "",
    poids: Math.ceil(Math.random().toFixed(2) * 10),
    poidsMaximum: Math.ceil(Math.random().toFixed(2) * 10),
    stock: Math.ceil(Math.random().toFixed(2) * 10),
    prix: Math.ceil(Math.random().toFixed(2) * 10),
    diametreExterieur: Math.ceil(Math.random().toFixed(2) * 10),
    diametreInterieur: Math.ceil(Math.random().toFixed(2) * 10),
    diametreTrouAxeCentral: Math.ceil(Math.random().toFixed(2) * 10),
    largeurInterieur: Math.ceil(Math.random().toFixed(2) * 10),
    largeurExterieur: Math.ceil(Math.random().toFixed(2) * 10),
    consigne: "",
    photoPath: "/spool.svg"
}).map((bob, i) => {return {...bob, idBobine : i, reference : "BOB"+i }}))

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