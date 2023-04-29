import { writable } from "svelte/store"

function f() {
    let data = {
        history: ['home'],
        segment: 'home',
        modal: 'close', // states: close or open
        rotate: undefined
    }

    const { subscribe, set } = writable(data)

    return {
        subscribe,
        gesture: ({name = undefined, direction = undefined}) => {
            data.rotate = undefined // reset rotation for each gesture call
            if (name === 'swipe') {
                switch (direction) {
                    case 'left':
                        if (data.segment === 'home') {
                            data.rotate = 'left'
                        }
                        break
                    case 'up':
                        if (data.segment === 'home') {
                            if(data.modal === 'close') {
                                data.modal = 'open'
                            }
                        }
                        break
                    case 'right':
                        if (data.segment === 'home') {
                            data.rotate = 'right'
                        }
                        break
                    case 'down':
                        if (data.segment === 'home') {
                            if(data.modal === 'open') {
                                data.modal = 'close'
                            }
                        }
                        break
                    default:
                        console.error(`Sorry, we are error in ${name} of route!`)
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