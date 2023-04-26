import { writable } from 'svelte/store'

export let gestureObj = writable(
    {
        name: undefined,
        axis: undefined,
        direction: undefined
    }
)