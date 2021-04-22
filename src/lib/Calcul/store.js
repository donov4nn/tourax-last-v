import {readable} from 'svelte/store'
import {bobines} from '$lib/Bobine/store.js'
import {cable} from '$lib/Cable/store.js'

export const calculs = readable([bobines, cable], ([$bobines, $cable]) => {
    return $bobines
})