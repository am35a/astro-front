import { writable } from 'svelte/store'

export const gestureObj = writable(
    {
        name: undefined,
        axis: undefined,
        direction: undefined
    }
)