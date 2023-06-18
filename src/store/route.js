// @ts-nocheck

import { writable } from "svelte/store"

function f() {
    let data = {
        history: ['horoscope'],
        segment: 'horoscope',
        modal: 'close', // states: close, open or lock
        rotate: undefined
    }

    const { subscribe, set } = writable(data)

    return {
        subscribe,
        modal: (state) => {
            data.modal = state
            set(data)
        },
        gesture: ({name = undefined, direction = undefined}) => {
            data.rotate = undefined // reset rotation for each gesture call
            if (name === 'swipe') {
                switch (direction) {
                    case 'left':

                        switch (data.segment) {
                            case 'horoscope':
                                // if(data.modal === 'close') {
                                    data.rotate = 'left'
                                // }
                                break
                            case 'login':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'up':

                        switch (data.segment) {
                            case 'horoscope':
                                if (data.segment === 'horoscope') {
                                    if(data.modal === 'close') {
                                        data.modal = 'open'
                                    }
                                }
                                break
                            case 'login':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'right':

                        switch (data.segment) {
                            case 'horoscope':
                                if (data.segment === 'horoscope') {
                                    // if(data.modal === 'close') {
                                        data.rotate = 'right'
                                    // }
                                }
                                break
                            case 'login':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'down':

                        switch (data.segment) {
                            case 'horoscope':
                                if (data.segment === 'horoscope') {
                                    if(data.modal === 'open') {
                                        data.modal = 'close'
                                    }
                                }
                                break
                            case 'login':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    default:
                        console.error(`Sorry, we are route error in name: ${name} > direction: ${direction}!`)
                }
            }
            set(data)
        },
        goto: (route) => {
            if(data.history[data.history.length - 1] !== route) {
                data.history.push(route)
                data.segment = route
                set(data)
            }
            // console.log(data.segment)
        },
        back: () => {
            if(data.history.length > 1) {
                data.history.pop()
                data.segment = data.history[data.history.length - 1]
                if(data.segment === 'about' || data.segment === 'help')
                    route.back()
                else
                    set(data)
                // data.isHistory = true
            }
            // else
            //     data.isHistory = false
            // set(data)
        }
    }
}

export const route = f()