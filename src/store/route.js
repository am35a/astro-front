// @ts-nocheck

import { writable } from "svelte/store"

function f() {
    let data = {
        history: ['horoscope'],
        segment: 'horoscope',
        modal: 'close', // states: close, open or lock
        modalMotion: false,
        rotate: undefined
    }

    const { subscribe, set } = writable(data)

    return {
        subscribe,
        modal: (state) => {
            data.modal = state
            // set(data)
            // console.log(`modal: ${data.modal}`)
        },
        modalMotion: (state) => {
            data.modalMotion = state
            // set(data)
            // console.log(`modalMotion: ${data.modalMotion}`)
        },
        rotate: (state) => {
            data.rotate = state
            set(data)
        },
        gesture: ({name = undefined, direction = undefined}) => {
            data.rotate = undefined // reset rotation for each gesture call
            if (name === 'swipe') {
                switch (direction) {
                    case 'left':

                        switch (data.segment) {
                            case 'horoscope':
                                // if (data.modal === 'close') {
                                    route.rotate('left')
                                // }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'up':
                        /*{
                            restarting the segment:
                            return after opening the authorization window to the segment of horoscopes
                        */
                        // if (data.segment === 'authorization' || data.segment === 'account') {
                        //     data.rotate = undefined
                        //     route.back()
                        // }
                        /*}*/
                        switch (data.segment) {
                            case 'horoscope':
                                if (data.modal === 'close') {
                                    route.modal('open')
                                    set(data)
                                }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                // setTimeout(function(){
                                    route.back()
                                // }, 350)
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'right':

                        switch (data.segment) {
                            case 'horoscope':
                                // if (data.modal === 'close') {
                                    route.rotate('right')
                                // }
                                break
                            case 'authorization':
                                break
                            case 'account':
                                break
                            case 'about':
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    case 'down':

                        switch (data.segment) {
                            case 'horoscope':
                                if (data.modal === 'open') {
                                    route.modal('close')
                                    set(data)
                                }
                                break
                            case 'authorization':
                                if (data.modal === 'open') {
                                    data.modal = 'close'
                                    setTimeout(function(){
                                        route.back()
                                    }, 350);
                                }
                                break
                            case 'account':
                                if (data.modal === 'open') {
                                    data.modal = 'close'
                                    setTimeout(function(){
                                        route.back()
                                    }, 350);
                                }
                                break
                            case 'about':
                                if (data.modal === 'open') {
                                    route.modal('close')
                                    route.back()
                                }
                                break
                            default:
                                console.error(`Sorry, we are route error in name: ${name} > direction: ${direction} > segment ${data.segment}!`)
                        }

                        break
                    default:
                        console.error(`Sorry, we are route error in name: ${name} > direction: ${direction}!`)
                }
            }
            // set(data)
        },
        goto: (route) => {
            if (data.history.at(-1) !== route) {
                data.history.push(route)
                data.segment = route
                set(data)
            }
            // console.log(data.segment)
        },
        back: () => {
            if (data.history.length > 1) {
                data.history.pop()
                data.segment = data.history.at(-1)
                // if (data.segment === 'about' || data.segment === 'help')
                //     route.back()
                // else
                set(data)
                // data.isHistory = true
            }
            // else
            //     data.isHistory = false
            // set(data)

            // console.log(`back: ${data.segment}`)
        }
    }
}

export const route = f()