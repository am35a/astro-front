import { writable } from 'svelte/store'

export let userObj = writable(
    {
        isAuthorized: false, // false as default
    }
)

export let appObj = writable(
    {
        segment: 'home',
        isModal: false
    }
)

// export let horoscope = writable({})

