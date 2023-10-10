import { writable } from 'svelte/store'

export const personalData = writable(
    // below data use as default
    {
        name: '',
        // birthdayOBJ: {
        //     day: undefined,
        //     month: undefined,
        //     year: undefined
        // },
        date: '',
        sex: '',
        time: '',
        birthplace: ''
    }
)